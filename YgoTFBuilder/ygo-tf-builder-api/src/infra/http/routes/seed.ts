import { db } from "@/infra/db/postgresql";
import { schema } from "@/infra/db/postgresql/schemas";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import cardJson from "../../db/postgresql/initialState/card.json";
import packJson from "../../db/postgresql/initialState/pack.json";
import cardsPerPackJson from "../../db/postgresql/initialState/pack_card.json";
import { keysToCamel } from "@/utils/conversions/snakeToCamel";
import {
  archetypeEnum,
  attributeEnum,
  frameTypeEnum,
  raceEnum,
  rarityEnum,
  typeEnum,
} from "@/infra/db/postgresql/schemas/card";

const cardDbSchema = z.object({
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

const packDbSchema = z.object({
  name: z.string(),
  cost: z.number(),
  unlockCondition: z.string(),
  coverCard: z.string(),
  cardsInPack: z.number(),
  cardsPerPack: z.number(),
});

const cardPerPackDbSchema = z.object({
  cardId: z.number(),
  packId: z.number(),
});

const BATCH_SIZE = 100;

export const seed: FastifyPluginAsyncZod = async (server) => {
  server.post(
    "/seed/cards",
    {
      schema: {
        summary:
          "Erases all card content and seeds refreshed content into the database",
        response: {
          201: z.object({}),
          500: z.object({}),
        },
      },
    },
    async (_, reply) => {
      await db.delete(schema.card);

      for (let i = 0; i < cardJson.card.length; i = i += BATCH_SIZE) {
        const cardList = cardJson.card.slice(i, i + BATCH_SIZE);

        const cardsParsed = cardList.map((card) => {
          return cardDbSchema.parse(keysToCamel(card));
        });

        await db.insert(schema.card).values([...cardsParsed]);
      }

      return reply.status(201).send({});
    }
  );

  server.post(
    "/seed/packs",
    {
      schema: {
        summary:
          "Erases all packs content and seeds refreshed content into the database",
        response: {
          201: z.object({}),
          500: z.object({}),
        },
      },
    },
    async (_, reply) => {
      await db.delete(schema.pack);

      for (let i = 0; i < packJson.pack.length; i = i += BATCH_SIZE) {
        const packList = packJson.pack.slice(i, i + BATCH_SIZE);

        const packsParsed = packList.map((pack) => {
          return packDbSchema.parse(keysToCamel(pack));
        });

        await db.insert(schema.pack).values([...packsParsed]);
      }

      return reply.status(201).send({});
    }
  );

  server.post(
    "/seed/cards-per-pack",
    {
      schema: {
        summary:
          "Erases all card per pack content and seeds refreshed content into the database",
        response: {
          201: z.object({}),
          500: z.object({}),
        },
      },
    },
    async (_, reply) => {
      await db.delete(schema.cardsPerPack);

      for (
        let i = 0;
        i < cardsPerPackJson.pack_card.length;
        i = i += BATCH_SIZE
      ) {
        const cardPerPackList = cardsPerPackJson.pack_card.slice(
          i,
          i + BATCH_SIZE
        );

        const cardPerPackParsed = cardPerPackList.map((cardPerPack) => {
          return cardPerPackDbSchema.parse(keysToCamel(cardPerPack));
        });

        await db.insert(schema.cardsPerPack).values([...cardPerPackParsed]);
      }

      return reply.status(201).send({});
    }
  );
};
