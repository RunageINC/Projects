/* eslint-disable react/prop-types */
import { Card } from "../../atoms/Card";

import "./index.css";

export const CardList = ({
  cardList,
  onCardClick,
  onCardHover,
  cardWidth,
  cardHeight,
  showCardRarity,
}) => (
  <div className="card-list">
    {cardList.map((card) => (
      <Card
        key={card.id}
        card={card}
        onClick={onCardClick}
        onHover={onCardHover}
        width={cardWidth}
        height={cardHeight}
        showRarity={showCardRarity}
      />
    ))}
  </div>
);
