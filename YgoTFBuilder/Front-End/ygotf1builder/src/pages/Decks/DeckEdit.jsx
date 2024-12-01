import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getDeckById } from "../../api/decks";

import { DeckEditBody } from "./templates/DeckEditBody";

export function loader({ params }) {
  const deckId = params.deckId;
  return { deckId };
}

export const DeckEdit = () => {
  const { deckId } = useLoaderData();

  const [deck, setDeck] = useState(null);

  useEffect(() => {
    getDeckById(deckId).then(setDeck);
  }, [deckId]);

  return deck && <DeckEditBody loadedDeck={deck} />;
};
