import { api } from "@/lib/axios";

export interface TraitResponse {
  id: number;
  name: string;
  description: string;
}

export async function getAllTraits() {
  const response = await api.get<TraitResponse[]>("/traits");

  return response.data;
}
