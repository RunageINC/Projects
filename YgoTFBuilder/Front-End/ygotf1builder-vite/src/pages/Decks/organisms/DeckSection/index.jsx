/* eslint-disable react/prop-types */
import { CardList } from "../../../../@shared/molecules/CardList";
import { DeckSectionTitle } from "../../atoms/DeckSectionTitle";
import { DeckLength } from "../../atoms/DeckLength";

import "./index.css";

export const DeckSection = ({
  sectionTitle,
  cardList,
  deckType,
  onCardClick,
  onCardHover,
}) => {
  return (
    <div className="deck-edit-form__deck-section">
      <div className="deck-edit-form__deck-header">
        <DeckSectionTitle text={sectionTitle} />
        <DeckLength deckSize={cardList.length} deckType={deckType} />
      </div>
      <div className="deck-edit-form__deck-content">
        <CardList
          cardList={cardList}
          onCardClick={onCardClick}
          onCardHover={onCardHover}
          cardHeight={100}
          showCardRarity={false}
        />
      </div>
    </div>
  );
};
