import { z } from "zod";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { playerCollection } from "@/infra/db/mongodb";

const deckSchema = z.object({
  name: z.string(),
  gameAppearance: z.string(),
  coverCard: z.string().nullish(),
  description: z.string().nullish(),
  playtip: z.string().nullish(),
  bestPartners: z.array(z.string()).nullish().default([]),
  mainDeck: z.array(z.number()),
  extraDeck: z.array(z.number()).default([]),
  sideDeck: z.array(z.number()).default([]),
});

export const playerDecks: FastifyPluginAsyncZod = async (server) => {
  server.post(
    "/decks",
    {
      schema: {
        summary: "Create a new character",
        response: {
          201: z.object({ id: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const body = deckSchema.parse(request.body);

      const response = await playerCollection.insertOne(body);

      return reply.status(201).send({ id: response.insertedId.toString() });
    }
  );

  server.get(
    "/decks",
    {
      schema: {
        summary: "List existing decks",
        response: {
          200: z.any(),
          404: z.any(),
        },
      },
    },
    async (_, reply) => {
      const response = await playerCollection.find({}).toArray();

      if (response.length === 0) {
        return reply.status(404).send();
      }

      return reply.status(200).send({ response });
    }
  );
};
