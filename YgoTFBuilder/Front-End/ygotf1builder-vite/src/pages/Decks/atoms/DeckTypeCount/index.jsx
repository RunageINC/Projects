/* eslint-disable react/prop-types */
import { Rarity } from "../../../../@shared/atoms/Card/Rarity";

import "./index.css";

const mainTypes = ["Effect", "Normal", "Trap", "Spell", "Ritual"];
const extraTypes = ["Fusion"];
const rarity = ["Common", "Rare", "Super Rare", "Ultra Rare"];

const TypeCount = ({ type, count }) =>
  count > 0 && (
    <div className="type-count-legend">
      <div className={`type-count-legend__card ${type.toLowerCase()}`}>
        <div className="type-count-legend__inside" />
      </div>
      <div className="type-count-text">
        <span>{type}</span>
        <span>{count}</span>
      </div>
    </div>
  );

export const DeckTypeCount = ({ cardsOnDeck }) => (
  <div className="type-count">
    {mainTypes.map((type, index) => {
      const count = cardsOnDeck.main.filter(
        (card) => card.frameType === type.toLowerCase()
      ).length;

      return <TypeCount key={index} type={type} count={count} />;
    })}
    {extraTypes.map((type, index) => {
      const count = cardsOnDeck.extra.filter(
        (card) => card.frameType === type.toLowerCase()
      ).length;

      return <TypeCount key={index} type={type} count={count} />;
    })}
  </div>
);

export const RarityCount = ({ cardsOnDeck }) => (
  <div className="rarity-count">
    {rarity.map((rarity, index) => {
      const count =
        cardsOnDeck.main.filter((card) => card.rarity === rarity).length +
        cardsOnDeck.extra.filter((card) => card.rarity === rarity).length;

      return (
        <div className="type-count-legend" key={index}>
          <Rarity rarityValue={rarity} />
          <div className="type-count-text">
            <span>{rarity}</span>
            <span>{count}</span>
          </div>
        </div>
      );
    })}
  </div>
);
