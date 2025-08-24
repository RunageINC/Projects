import { z } from "zod";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { db } from "@/infra/db";
import { schema } from "@/infra/db/schemas";
import {
  rarityEnum,
  typeEnum,
  frameTypeEnum,
  raceEnum,
  attributeEnum,
  archetypeEnum,
} from "@/infra/db/schemas/card";
import { and, eq } from "drizzle-orm/pg-core/expressions";
import { sql } from "drizzle-orm";

const cardFilterSchema = z.object({
  name: z.string().nullish(),
  description: z.string().nullish(),
  archetype: z.string().nullish(),
  rarity: z.string().nullish(),
  typeline: z.string().nullish(),
  frameType: z.string().nullish(),
  race: z.string().nullish(),
  atk: z.string().nullish(),
  def: z.string().nullish(),
  level: z.string().nullish(),
  attribute: z.string().nullish(),
});

const paginationSchema = z.object({
  page: z.string().default("1"),
  perPage: z.string().default("50"),
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

const cardByIdParam = z.object({
  id: z.string(),
});

export const cards: FastifyPluginAsyncZod = async (server) => {
  server.get(
    "/cards",
    {
      schema: {
        summary:
          "Get all cards available on database, paginated. Filters can be passed down",
        response: {
          200: z.object({
            data: z.array(cardsSchema),
            page: z.string(),
            perPage: z.string(),
            total: z.number(),
            totalPages: z.number(),
          }),
        },
      },
    },
    async (request, reply) => {
      const filters = request.query;

      const parsedFilters = cardFilterSchema.parse(filters);
      const pagination = paginationSchema.parse(filters);

      const offset = (Number(pagination.page) - 1) * Number(pagination.perPage);

      const conditions = Object.entries(parsedFilters)
        .filter(([_, value]) => value != null)
        .map(([key, value]) =>
          eq(schema.card[key as keyof typeof schema.card] as any, value as any)
        );

      const whereClause =
        conditions.length > 0 ? and(...conditions) : undefined;

      const totalResult = await db
        .select({ count: sql<number>`count(*)` })
        .from(schema.card)
        .where(whereClause ?? sql`true`);

      const total = Number(totalResult[0]?.count ?? 0);
      const totalPages = Math.ceil(total / Number(pagination.perPage));

      const data = await db
        .select()
        .from(schema.card)
        .where(whereClause ?? sql`true`)
        .offset(offset)
        .limit(Number(pagination.perPage));

      return reply.status(200).send({
        data,
        page: pagination.page,
        perPage: pagination.perPage,
        total,
        totalPages,
      });
    }
  );
  server.get(
    "/cards/:id",
    {
      schema: {
        summary: "Get a card by id",
        response: {
          200: z.object({
            data: cardsSchema,
          }),
          404: z.object({}).describe("No card found for given id"), //get cards object paginated but empty
        },
      },
    },
    async (request, reply) => {
      const { id } = cardByIdParam.parse(request.params);
      const numericId = Number(id);

      const card = await db.query.card.findFirst({
        where: eq(schema.card.id, numericId),
      });

      if (!card) {
        return reply.status(404).send();
      }

      const parsedResult = cardsSchema.parse(card);

      return reply.status(200).send({ data: parsedResult });
    }
  );
};
