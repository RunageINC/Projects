/* eslint-disable react/prop-types */
import { Rarity } from "./Rarity";

import { SkeletonWrapper } from "../SkeletonWrapper";

import "./index.css";

export const Card = ({ card, onClick, onHover, width, height, showRarity }) => {
  const handleOnClick = () => {
    onClick(card);
  };

  const handleOnHover = () => {
    onHover(card);
  };

  return card ? (
    <div className="card-template">
      {showRarity && <Rarity rarityValue={card.rarity} />}
      <div
        className="card-body"
        onClick={handleOnClick}
        onMouseEnter={handleOnHover}
        style={{
          width: width ?? "fit-content",
          height: height ?? "fit-content",
        }}
      >
        <img
          src={card.image}
          alt={card.name}
          height={height ?? "100%"}
          width={width ?? "100%"}
        />
      </div>
    </div>
  ) : (
    <SkeletonWrapper width={width} height={height} />
  );
};
