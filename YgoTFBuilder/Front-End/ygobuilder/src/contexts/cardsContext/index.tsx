"use client";

import { useState, useEffect, createContext } from "react";

import { getPacks } from "@/app/api/packs";
import { getCards } from "@/app/api/cards";

export const CardsContext = createContext({} as any);

export const CardsContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [packs, setPacks] = useState<Pack[]>([]);
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    getPacks()
      .then((data) => setPacks(data))
      .catch((error) => console.error(error));

    getCards()
      .then((data) => setCards(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <CardsContext.Provider value={{ packs, cards }}>
      {children}
    </CardsContext.Provider>
  );
};
