import { useState } from "react";

import { GameTitle } from "../../@shared/atoms/GameTitle";
import { CardSearcher } from "../../@shared/templates/CardSearcher";

import { CardDetails } from "../../@shared/organisms/CardDetails";

import "./index.css";

export const Cards = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOnCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <>
      <GameTitle />
      <div className="cards__content">
        <div className="cards__card-list">
          <CardSearcher
            onCardClick={handleOnCardClick}
            cardOnListHeight={200}
            showCardRarity={true}
            wrapFilters={false}
          />
        </div>
        <div className="cards__card-details">
          {selectedCard && (
            <CardDetails selectedCard={selectedCard} direction="column" />
          )}
        </div>
      </div>
    </>
  );
};
