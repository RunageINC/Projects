import {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { createPortal } from "react-dom";

import { X } from "phosphor-react";

import { fetchWithNameOnly } from "../../../../api/cards";

import { CardList } from "../../../../@shared/molecules/CardList";

import "./index.css";

export const DeckCoverModal = forwardRef(function DeckCoverModal(
  { setImage },
  ref
) {
  const [searchValue, setSearchValue] = useState("");
  const [resultList, setResultList] = useState([]);

  const modalDialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modalDialog.current.showModal();
      },
    };
  });

  useEffect(() => {
    if (!searchValue || searchValue.length === 0) return;

    fetchWithNameOnly(searchValue).then(setResultList);
  }, [searchValue]);

  const handleSetImage = (card) => {
    setImage(card.imageCropped);
    modalDialog.current.close();
  };

  return createPortal(
    <dialog ref={modalDialog} className="modal-deck-cover">
      <X
        className="modal-deck-cover__close"
        size={20}
        color="white"
        onClick={() => modalDialog.current.close()}
      />
      <div className="modal-deck-cover__content">
        <input
          type="text"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Type the name of a card..."
        />
      </div>
      <div className="modal-deck-cover__card-list">
        <CardList
          cardList={resultList}
          onCardHover={() => {}}
          onCardClick={handleSetImage}
          cardHeight={200}
          showCardRarity={false}
        />
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});
