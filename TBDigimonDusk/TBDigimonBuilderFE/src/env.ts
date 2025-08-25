import { z } from "zod";

const envSchema = z.object({
  BACKEND_URL: z.string().url().default("http://localhost:3000"),
});

export const env = envSchema.parse(import.meta.env);
