"use client";

import { useContext } from "react";

import { CardsContext } from "@/contexts/cardsContext";

import { PageHeader } from "@/components/atoms/PageHeader";
import { CardList } from "@/components/templates/CardList";

const CardsPage = () => {
  const { cards } = useContext(CardsContext);

  const cardsAreLoading = cards?.length === 0 || cards?.content.length === 0;

  if (cardsAreLoading) return <p>Loading...</p>;

  return (
    <div>
      <PageHeader
        title="Cards List"
        description="Here's a list of cards to check"
      />
      <CardList cardList={cards.content} />
    </div>
  );
};

export default CardsPage;
