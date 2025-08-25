import { env } from "@/env";
import { fastifyCors } from "@fastify/cors";

import { fastify } from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  hasZodFastifySchemaValidationErrors,
  jsonSchemaTransform,
} from "fastify-type-provider-zod";
import { cards } from "./routes/cards";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { seed } from "./routes/seed";
import { packs } from "./routes/packs";
import { characters } from "./routes/charaters";
import { playerDecks } from "./routes/playerDecks";

const server = fastify();

server.setValidatorCompiler(validatorCompiler);

server.setSerializerCompiler(serializerCompiler);

server.setErrorHandler((error, request, reply) => {
  if (hasZodFastifySchemaValidationErrors(error)) {
    return reply.status(400).send({
      message: "Validation error",
      issues: error.validation,
    });
  }

  if (env.NODE_ENV === "development") {
    console.error(`💣 - YGO TF API - Internal Server Error: ${error}`);
  }

  return reply.status(500).send({ message: "Internal server error " });
});

server.register(fastifyCors, { origin: "*" });
server.register(fastifySwagger, {
  openapi: {
    info: {
      title: "YGO TF Builder Server",
      version: "1.0.0",
    },
  },
  transform: jsonSchemaTransform,
});

server.register(fastifySwaggerUi, {
  routePrefix: "/docs",
});

server.register(cards);
server.register(packs);
server.register(characters);
server.register(playerDecks);
server.register(seed);

server
  .listen({ port: 3333, host: "0.0.0.0" })
  .then(() => console.log("HTTP server running"));
