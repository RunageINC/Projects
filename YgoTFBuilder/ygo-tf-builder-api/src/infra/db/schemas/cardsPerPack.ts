import { pgTable, integer } from "drizzle-orm/pg-core";
import { card } from "./card";
import { pack } from "./pack";

export const cardsPerPack = pgTable("pack_card", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  cardId: integer("card_id").references(() => card.id),
  packId: integer("pack_id").references(() => pack.id),
});
