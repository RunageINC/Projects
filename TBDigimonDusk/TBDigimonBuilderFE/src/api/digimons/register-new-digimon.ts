import { api } from "@/lib/axios";

export interface DigimonRequest {
  digiNumber: number;
  name: string;
  traits: number[];
  supportAbility: number;
  strongAttribute: number[];
  weakAttribute: number[];
  attack: number;
  defense: number;
  spirit: number;
  speed: number;
  aptitude: number;
  level: number[];
  skills: number[];
}

export async function registerTrait({
  digiNumber,
  name,
  traits,
  supportAbility,
  strongAttribute,
  weakAttribute,
  attack,
  defense,
  spirit,
  speed,
  aptitude,
  level,
  skills,
}: DigimonRequest) {
  return await api.post(`/digimons/${digiNumber}`, {
    digiNumber,
    name,
    traits,
    supportAbility,
    strongAttribute,
    weakAttribute,
    attack,
    defense,
    spirit,
    speed,
    aptitude,
    level,
    skills,
  });
}
