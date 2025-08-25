import { z } from "zod";
import { and, ilike, inArray, or } from "drizzle-orm";
import { schema } from "@/infra/db/postgresql/schemas";

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

// Build conditions

type FilterType = z.infer<typeof cardFilterSchema>;

export const parseFilters = (filters: FilterType) => {
  const conditions = Object.entries(filters)
    .filter(([_, value]) => value != null)
    .map(([key, value]) => {
      // Special handling for "name"
      if (key === "name") {
        return or(
          ilike(schema.card.name, `%${value}%`),
          ilike(schema.card.gameName, `%${value}%`)
        );
      }

      // For everything else, handle as IN if multiple values, or eq if single
      const column = schema.card[key as keyof typeof schema.card] as any;
      if (Array.isArray(value)) {
        return inArray(column, value);
      } else {
        return inArray(column, [value]); // ensures consistent behavior
      }
    });

  // Where clause
  return conditions.length > 0 ? and(...conditions) : undefined;
};
