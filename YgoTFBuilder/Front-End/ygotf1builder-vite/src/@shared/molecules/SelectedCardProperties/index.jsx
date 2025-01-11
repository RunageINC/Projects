/* eslint-disable react/prop-types */
import { Rarity } from "../../atoms/Card/Rarity";

import { ShieldCheckered, Sword } from "phosphor-react";
import { StarGroup } from "../StarGroup";

import "./index.css";
import { Attribute } from "../../atoms/Attribute";

const formatTypeline = (typeline) => typeline.replace(/;/g, " - ");

const formatReplacers = (text) => text.replace(/\\r\\n/g, "\n");

export const SelectedCardProperties = ({ selectedCard }) => (
  <div className="chosen-card__properties">
    <span className="chosen-card__title-text">{selectedCard.name}</span>
    <span className="chosen-card__title-text chosen-card__game-name">
      Name on the Game: <span>{selectedCard.gameName}</span>
    </span>
    {selectedCard.level && (
      <span className="chosen-card__level">
        <StarGroup number={selectedCard.level} />
      </span>
    )}
    {selectedCard.atk && (
      <span className="chosen-card__stats">
        <Sword weight="fill" size={25} color="#aa8c06" /> {selectedCard.atk} -{" "}
        <ShieldCheckered weight="duotone" size={25} color="gray" />{" "}
        {selectedCard.def}
      </span>
    )}
    {selectedCard.attribute && (
      <span className="chosen-card__attribute">
        <Attribute attribute={selectedCard.attribute} />
        <span>{selectedCard.attribute}</span>
      </span>
    )}
    <span className="chosen-card__rarity-field">
      <span>Rarity:</span>
      <Rarity rarityValue={selectedCard.rarity} />
    </span>
    {selectedCard.typeline && (
      <span>Typeline: {formatTypeline(selectedCard.typeline)}</span>
    )}
    <span>Type: {selectedCard.type}</span>
    <span>Type 2: {selectedCard.humanReadableCardType}</span>
    <span>Frame: {selectedCard.frameType}</span>
    {selectedCard.race && <span>Race: {selectedCard.race}</span>}
    {selectedCard.archetype && <span>Archetype: {selectedCard.archetype}</span>}
    <pre className="chosen-card__description">
      {formatReplacers(selectedCard.description)}
    </pre>
  </div>
);
