import { AddCharacter } from "@/components/add-character";
import { CharacterPreview } from "@/components/character-preview";
import { useCharacters } from "@/components/context/useCharacters";
import { Link } from "react-router";

export function CharacterListPage() {
  const { characterData } = useCharacters();

  return (
    <div className="m-3">
      <h1>Character List</h1>

      <div className="flex gap-3 mt-3">
        {characterData &&
          characterData.map((character) => (
            <Link key={character._id} to={`/characters/${character._id}`}>
              <CharacterPreview character={character} />
            </Link>
          ))}
        <AddCharacter />
      </div>
    </div>
  );
}
