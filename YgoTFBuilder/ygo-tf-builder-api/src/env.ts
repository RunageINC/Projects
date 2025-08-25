import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  NODE_ENV: z.enum(["development", "test", "production"]).default("production"),
  DATABASE_URL: z.url().startsWith("postgresql://"),
  MONGODB_URL: z.url().startsWith("mongodb://"),
  MONGODB_NAME: z.string(),
  MONGODB_PLAYER_COLLECTION: z.string(),
  MONGODB_CHARACTER_COLLECTION: z.string(),
});

export const env = envSchema.parse(process.env);
