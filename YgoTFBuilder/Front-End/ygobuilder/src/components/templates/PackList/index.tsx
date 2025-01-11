"use client";

import { CardsContext } from "@/contexts/cardsContext";
import { useContext } from "react";

import { CardPackDetailedModal } from "@/components/organisms/CardPackDetailedModal";

export const PackList = () => {
  const { packs } = useContext(CardsContext);

  return (
    packs && (
      <div className="flex flex-wrap gap-5">
        {packs.map((cardPack: Pack) => (
          <CardPackDetailedModal pack={cardPack} key={cardPack.id} />
        ))}
      </div>
    )
  );
};
