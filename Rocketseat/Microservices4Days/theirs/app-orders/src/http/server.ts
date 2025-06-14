import "@opentelemetry/auto-instrumentations-node/register";

import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { z } from "zod";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { randomUUID } from "node:crypto";
import { dispatchOrderCreated } from "../broker/messages/order-created.ts";
import { db } from "../db/client.ts";
import { schema } from "../db/schema/index.ts";
import { trace } from "@opentelemetry/api";

const CUSTOMER_FROM_DB = "123";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(fastifyCors, { origin: "*" });

// Quando temos escalonamento horizontal, e temos um deploy
// blue-green, precisamos de uma rota de health check

app.get("/health", () => {
  return "OK";
});

app.post(
  "/orders",
  {
    schema: {
      body: z.object({
        amount: z.coerce.number(),
      }),
    },
  },
  async (req, res) => {
    const { amount } = req.body;

    console.log("Creating new order with amount ", amount);

    const orderId = randomUUID();

    trace.getActiveSpan()?.setAttribute("order_id", orderId);

    dispatchOrderCreated({
      orderId,
      amount,
      customer: {
        id: CUSTOMER_FROM_DB,
      },
    });

    await db.insert(schema.orders).values({
      id: orderId,
      customerId: CUSTOMER_FROM_DB,
      amount,
    });

    return res.status(201).send();
  }
);

app.listen({ host: "0.0.0.0", port: 3333 }).then(() => {
  console.log("[Orders] HTTP Server running!");
});
