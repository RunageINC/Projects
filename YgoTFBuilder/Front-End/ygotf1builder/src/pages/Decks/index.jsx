import { useState, useEffect } from "react";

import { PlusCircle } from "phosphor-react";
import { GameTitle } from "../../@shared/atoms/GameTitle";
import "./index.css";
import { getDecks } from "../../api/decks";

export const DeckBuild = () => {
  const [deckList, setDeckList] = useState([]);

  useEffect(() => {
    getDecks().then(setDeckList);
  }, []);

  return (
    <>
      <GameTitle />
      <div className="deck-list">
        <a href="/decks/new" className="deck-list__deck-option">
          <PlusCircle size={60} />
          <h3>New Deck</h3>
        </a>
        {deckList.map((deck) => (
          <a
            key={deck.id}
            href={`/decks/${deck.id}`}
            className="deck-list__deck-option"
          >
            <img src={deck.image} height={120} />
            <h3>{deck.name}</h3>
          </a>
        ))}
      </div>
    </>
  );
};
