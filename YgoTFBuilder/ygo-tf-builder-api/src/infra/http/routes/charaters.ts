import { z } from "zod";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { characterCollection } from "@/infra/db/mongodb";

const deckSchema = z.object({
  name: z.string(),
  gameAppearance: z.string(),
  coverCard: z.url().nullish(),
  description: z.string().nullish(),
  playtip: z.string().nullish(),
  mainDeck: z.array(z.number()),
  extraDeck: z.array(z.number()).default([]),
  sideDeck: z.array(z.number()).default([]),
});

const characterRequest = z.object({
  name: z.string().min(1),
  gameAppearance: z.string(),
  imageUrl: z.url().nullish(),
  level: z.string(),
  description: z.string().nullish(),
  foundAt: z.string().nullish(),
  decks: z.array(deckSchema),
});

export const characters: FastifyPluginAsyncZod = async (server) => {
  server.post(
    "/characters",
    {
      schema: {
        summary: "Create a new character",
        response: {
          201: z.object({ id: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const body = characterRequest.parse(request.body);

      const response = await characterCollection.insertOne(body);

      return reply.status(201).send({ id: response.insertedId.toString() });
    }
  );

  server.get(
    "/characters",
    {
      schema: {
        summary: "Create a new character",
        response: {
          200: z.any(),
          404: z.any(),
        },
      },
    },
    async (_, reply) => {
      const response = await characterCollection.find({}).toArray();

      if (response.length === 0) {
        return reply.status(404).send();
      }

      return reply.status(200).send({ response });
    }
  );
};
