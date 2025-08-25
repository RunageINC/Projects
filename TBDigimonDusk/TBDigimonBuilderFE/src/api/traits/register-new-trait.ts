import { api } from "@/lib/axios";

export interface TraitRequest {
  name: string;
  description: string;
}

export async function registerTrait({ name, description }: TraitRequest) {
  return await api.post("/traits", {
    name,
    description,
  });
}
