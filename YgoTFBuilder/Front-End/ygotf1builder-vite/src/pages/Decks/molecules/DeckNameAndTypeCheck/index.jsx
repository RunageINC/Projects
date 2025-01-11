/* eslint-disable react/prop-types */
import { DeckNameInput } from "../../atoms/DeckNameInput";
import { DynamicButton } from "../../../../@shared/atoms/DynamicButton";
import { DeckTypeCount, RarityCount } from "../../atoms/DeckTypeCount";

import "./index.css";

export const DeckNameAndTypeCheck = ({ name, setName, cardsOnDeck }) => (
  <div className="deck-edit-form__deck-metadata">
    <div className="deck-edit-form__deck-input-section">
      <DeckNameInput value={name} setValue={setName} />
      <DynamicButton type="save" isSubmit />
    </div>
    <DeckTypeCount cardsOnDeck={cardsOnDeck} />
    <RarityCount cardsOnDeck={cardsOnDeck} />
  </div>
);
