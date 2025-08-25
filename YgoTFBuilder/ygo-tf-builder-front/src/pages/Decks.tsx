import { usePlayerDecks } from "@/components/context/usePlayer";
import { CreateDeck } from "@/components/create-deck";
import { DeckPreview } from "@/components/deck-preview";
import { Link } from "react-router";

export function DecksPage() {
  const { playerDecks } = usePlayerDecks();

  return (
    <div className="m-3">
      <h1>Deck List</h1>

      <div className="flex gap-3 mt-3">
        {playerDecks &&
          playerDecks.map((deck) => (
            <Link key={deck._id} to={`/characters/${deck._id}`}>
              <DeckPreview deck={deck} />
            </Link>
          ))}
        <Link to="/decks/new">
          <CreateDeck />
        </Link>
      </div>
    </div>
  );
}
