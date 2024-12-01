/* eslint-disable react/prop-types */
import { Camera } from "phosphor-react";

import "./index.css";
import { DynamicButton } from "../../../../@shared/atoms/DynamicButton";

export const DeckCover = ({ deckImage, setOpenModal }) => (
  <div className="deck-edit-form__main">
    <div className="deck-edit-form__image">
      {deckImage && (
        <img
          src={deckImage}
          alt=""
          width={140}
          height={180}
          className="deck-edit-form__deck-image"
        />
      )}
      {!deckImage && (
        <div className="deck-edit-form__upload" onClick={setOpenModal}>
          <Camera size={40} color="gray" />
          <h5>Choose a card image</h5>
        </div>
      )}
    </div>
    {deckImage && <DynamicButton type="refresh" onClick={setOpenModal} />}
  </div>
);
