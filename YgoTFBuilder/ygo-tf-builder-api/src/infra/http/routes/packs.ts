import { z } from "zod";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { db } from "@/infra/db";
import { schema } from "@/infra/db/schemas";
import { eq, inArray } from "drizzle-orm/pg-core/expressions";
import {
  rarityEnum,
  typeEnum,
  frameTypeEnum,
  raceEnum,
  attributeEnum,
  archetypeEnum,
} from "@/infra/db/schemas/card";

const packsSchema = z.object({
  id: z.number(),
  name: z.string(),
  cost: z.number(),
  unlockCondition: z.string(),
  coverCard: z.string(),
  cardsInPack: z.number(),
  cardsPerPack: z.number(),
});

const cardsSchema = z.object({
  id: z.number(),
  name: z.string(),
  gameName: z.string(),
  rarity: z.enum(rarityEnum),
  typeline: z.string().nullish(),
  type: z.enum(typeEnum),
  humanReadableCardType: z.string(),
  frameType: z.enum(frameTypeEnum),
  description: z.string(),
  race: z.enum(raceEnum),
  atk: z.number().nullish(),
  def: z.number().nullish(),
  level: z.number().nullish(),
  attribute: z.enum(attributeEnum).nullish(),
  archetype: z.enum(archetypeEnum).nullish(),
  image: z.string().nullish(),
  imageCropped: z.string().nullish(),
});

const packByIdParam = z.object({
  id: z.string(),
});

export const packs: FastifyPluginAsyncZod = async (server) => {
  server.get(
    "/packs",
    {
      schema: {
        summary:
          "Get all cards available on database, paginated. Filters can be passed down",
        response: {
          200: z.object({
            data: z.array(packsSchema),
          }),
        },
      },
    },
    async (_, reply) => {
      const data = await db.select().from(schema.pack);

      return reply.status(200).send({ data });
    }
  );
  server.get(
    "/packs/:id",
    {
      schema: {
        summary: "Get a card by id",
        response: {
          200: z.object({
            data: packsSchema,
          }),
          404: z.object({}).describe("No card found for given id"), //get cards object paginated but empty
        },
      },
    },
    async (request, reply) => {
      const { id } = packByIdParam.parse(request.params);
      const numericId = Number(id);

      const pack = await db.query.pack.findFirst({
        where: eq(schema.pack.id, numericId),
      });

      if (!pack) {
        return reply.status(404).send();
      }

      const parsedResult = packsSchema.parse(pack);

      return reply.status(200).send({ data: parsedResult });
    }
  );
  server.get(
    "/packs/:id/cards",
    {
      schema: {
        summary: "Get cards in this pack",
        response: {
          200: z.object({
            packId: z.string(),
            cards: z.array(cardsSchema),
          }),
        },
      },
    },
    async (request, reply) => {
      const { id } = packByIdParam.parse(request.params);
      const numericId = Number(id);

      const queryResults = await db
        .select()
        .from(schema.cardsPerPack)
        .where(eq(schema.cardsPerPack.packId, numericId));

      const cardIds = queryResults.map((result) => result.cardId!);

      const cardsOnPack = await db
        .select()
        .from(schema.card)
        .where(inArray(schema.card.id, cardIds));

      return reply.status(200).send({ packId: id, cards: cardsOnPack });
    }
  );
};
