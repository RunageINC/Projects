import Image from "next/image";

import { Rarity } from "@/components/atoms/Rarity";

import "./index.css";

interface CardProps {
  card: Card;
  width: number;
  height: number;
  showRarity: boolean;
}

export const Card = ({ card, width, height, showRarity }: CardProps) => (
  <div
    className="card-template"
    style={{
      width: width ?? "fit-content",
      height: "fit-content",
    }}
  >
    {showRarity && <Rarity rarityValue={card.rarity} />}
    <div
      style={{
        width: width ?? "fit-content",
        height: "fit-content",
      }}
    >
      <Image
        src={card.image}
        alt={card.name}
        height={height ?? "100%"}
        width={width ?? "100%"}
      />
    </div>
  </div>
);
