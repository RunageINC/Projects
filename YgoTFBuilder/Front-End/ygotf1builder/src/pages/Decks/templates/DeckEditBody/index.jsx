/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { GameTitle } from "../../../../@shared/atoms/GameTitle";
import { CardSearcher } from "../../../../@shared/templates/CardSearcher";
import { CardDetails } from "../../../../@shared/organisms/CardDetails";
import { DeckCover } from "../../atoms/DeckCover";
import { DeckNameAndTypeCheck } from "../../molecules/DeckNameAndTypeCheck";
import { DeckSection } from "../../organisms/DeckSection";
import { DeckCoverModal } from "../../organisms/DeckCoverModal";

import { saveNewDeck, updateDeck } from "../../../../api/decks";

import "./index.css";

export const DeckEditBody = ({ loadedDeck = null }) => {
  const modalRef = useRef();
  const [deckName, setDeckName] = useState(loadedDeck?.name || "");
  const [deckImage, setDeckImage] = useState(loadedDeck?.image ?? null);
  const [selectedCardFromSearch, setSelectedCardFromSearch] = useState(null);
  const [cardsOnDeck, setCardsOnDeck] = useState(
    loadedDeck?.cards || {
      main: [],
      extra: [],
      side: [],
    }
  );

  const isExtraDeck = (frameType) => frameType === "fusion";

  const handleForm = (event) => {
    event.preventDefault();

    if (loadedDeck !== null) {
      updateDeck({
        id: loadedDeck.id,
        name: deckName,
        image: deckImage,
        cards: cardsOnDeck,
      });
      alert("Deck updated successfully");

      return;
    }

    const deck = {
      id: uuidv4(),
      name: deckName,
      image: deckImage,
      cards: cardsOnDeck,
    };

    saveNewDeck(deck);
    alert("Deck saved successfully");
  };

  const handleDeckNameChange = (event) => {
    setDeckName(event.target.value);
  };

  const countCardsOfSameType = (card, deck) =>
    deck.filter((cardOnDeck) => cardOnDeck.id === card.id).length;

  const handleAddCardToDeck = (card) => {
    setSelectedCardFromSearch(card);
    if (isExtraDeck(card.frameType)) {
      if (countCardsOfSameType(card, cardsOnDeck.extra) === 3) return;

      setCardsOnDeck((prev) => ({
        ...prev,
        extra: [...prev.extra, { ...card, carOnDeckId: uuidv4() }],
      }));
      return;
    }

    if (countCardsOfSameType(card, cardsOnDeck.main) === 3) return;
    setCardsOnDeck((prev) => ({
      ...prev,
      main: [...prev.main, { ...card, cardOnDeckId: uuidv4() }],
    }));
  };

  const handleRemoveCardFromDeck = (card) => {
    const { cardOnDeckId } = card;

    if (isExtraDeck(card.frameType)) {
      setCardsOnDeck((prev) => ({
        ...prev,
        extra: prev.extra.filter(
          (cardOnDeck) => cardOnDeck.cardOnDeckId !== cardOnDeckId
        ),
      }));
      return;
    }

    setCardsOnDeck((prev) => ({
      ...prev,
      main: prev.main.filter(
        (cardOnDeck) => cardOnDeck.cardOnDeckId !== cardOnDeckId
      ),
    }));
  };

  const handleOpenModal = () => {
    modalRef.current.open();
  };

  return (
    <>
      <DeckCoverModal setImage={setDeckImage} ref={modalRef} />
      <GameTitle />
      <div className="deck-edit">
        <div className="deck-edit-card-details">
          {selectedCardFromSearch && (
            <CardDetails
              selectedCard={selectedCardFromSearch}
              direction="column"
            />
          )}
        </div>
        <form onSubmit={handleForm} className="deck-edit-form">
          <div className="deck-edit-form__header">
            <DeckCover deckImage={deckImage} setOpenModal={handleOpenModal} />
            <DeckNameAndTypeCheck
              name={deckName}
              setName={handleDeckNameChange}
              cardsOnDeck={cardsOnDeck}
            />
          </div>
          <div className="deck-edit-form__card-list">
            <DeckSection
              sectionTitle={"Main Deck"}
              cardList={cardsOnDeck.main}
              deckType="main"
              onCardClick={handleRemoveCardFromDeck}
              onCardHover={setSelectedCardFromSearch}
            />
            <DeckSection
              sectionTitle={"Extra Deck"}
              cardList={cardsOnDeck.extra}
              deckType="extra"
              onCardClick={handleRemoveCardFromDeck}
              onCardHover={setSelectedCardFromSearch}
            />
            <DeckSection
              sectionTitle={"Side Deck"}
              cardList={cardsOnDeck.side}
              deckType="side"
              onCardClick={handleRemoveCardFromDeck}
              onCardHover={setSelectedCardFromSearch}
            />
          </div>
        </form>
        <div className="deck-edit-card-search">
          <CardSearcher
            onCardClick={handleAddCardToDeck}
            onCardHover={setSelectedCardFromSearch}
            showCardRarity={false}
            cardOnListHeight={100}
            wrapFilters
          />
        </div>
      </div>
    </>
  );
};
