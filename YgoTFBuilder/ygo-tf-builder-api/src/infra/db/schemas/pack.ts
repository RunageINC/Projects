import { integer, pgTable, smallint, text } from "drizzle-orm/pg-core";

export const pack = pgTable("pack", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  name: text("name").notNull().unique(),
  cost: smallint("cost").notNull(),
  unlockCondition: text("unlock_condition").notNull(),
  coverCard: text("cover_card").notNull(),
  cardsInPack: smallint("cards_in_pack").notNull(),
  cardsPerPack: smallint("cards_per_pack").notNull(),
});
