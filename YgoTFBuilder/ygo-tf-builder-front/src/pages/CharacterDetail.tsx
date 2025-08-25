import { CharacterDescription } from "@/components/character-description";
import { useCharacters } from "@/components/context/useCharacters";
import { DeckCard } from "@/components/deck-card";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { ChevronsUpDown, WalletCards } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export function CharacterDetailPage() {
  const { characterData } = useCharacters();
  const { id } = useParams<{ id: string }>();

  const detailed = characterData.find((data) => data._id === id)!;

  const filterNames = detailed.decks.map((deck) => deck.name);

  const [deck, setDeck] = useState<Card[]>([]);
  const [sideDeck, setSideDeck] = useState<Card[]>([]);
  const [extraDeck, setExtraDeck] = useState<Card[]>([]);
  const [strategy, setStrategy] = useState<string>();
  const [deckName, setDeckName] = useState<string>(filterNames[0]);

  const handleMainDeckCards = async () => {
    const selectedDeck = detailed.decks.find((deck) => deck.name === deckName);

    if (!selectedDeck) return;

    const cards = await Promise.all(
      selectedDeck.mainDeck.map(
        async (id) =>
          await axios
            .get<Card>(`http://localhost:3333/cards/${id}`)
            .then((res) => res.data)
      )
    );

    setDeck(cards);
  };

  const handleExtraDeckCards = async () => {
    const selectedDeck = detailed.decks.find((deck) => deck.name === deckName);

    if (!selectedDeck) return;

    const cards = await Promise.all(
      selectedDeck.extraDeck.map(
        async (id) =>
          await axios
            .get<Card>(`http://localhost:3333/cards/${id}`)
            .then((res) => res.data)
      )
    );

    setExtraDeck(cards);
  };

  const handleSideDeckCards = async () => {
    const selectedDeck = detailed.decks.find((deck) => deck.name === deckName);

    if (!selectedDeck) return;

    const cards = await Promise.all(
      selectedDeck.sideDeck.map(
        async (id) =>
          await axios
            .get<Card>(`http://localhost:3333/cards/${id}`)
            .then((res) => res.data)
      )
    );

    setSideDeck(cards);
  };

  const handleDeckStrategy = () => {
    const selectedDeck = detailed.decks.find((deck) => deck.name === deckName);

    if (!selectedDeck) return;

    setStrategy(selectedDeck.playtip);
  };

  useEffect(() => {
    const fillDeck = async () => {
      handleMainDeckCards();
      handleExtraDeckCards();
      handleSideDeckCards();
      handleDeckStrategy();
    };

    console.log(deckName);

    fillDeck();
  }, [deckName]);

  return (
    <div className="flex flex-col gap-3 m-3 w-[80dvw]">
      <h1 className="text-2xl">{detailed.name}</h1>
      <div className="flex gap-3">
        <img
          src={detailed.imageUrl}
          className=" min-h-[155px] max-w-[190px] rounded-sm"
        />
        <div className="flex flex-col gap-3">
          <span className="font-bold text-xl">
            Level: <span className="text-sm font-normal">{detailed.level}</span>
          </span>

          {detailed.description.length > 0 && (
            <CharacterDescription text={detailed.description} />
          )}
          {detailed.description.length === 0 && (
            <CharacterDescription text="No description" />
          )}
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-5 mt-5">
        <h1 className="text-2xl font-bold">Deck</h1>
        <div className="flex gap-3 items-center">
          <span className="font-semibold">Deck</span>
          <Select defaultValue={deckName} onValueChange={setDeckName}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a deck" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Decks</SelectLabel>
                {filterNames.map((name) => (
                  <SelectItem value={name}>{name}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <p className="border-gray-200 border-l-4 pl-4">
          <i>{strategy ?? "No strategy"}</i>
        </p>
        <Collapsible>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold flex gap-3">
              Main Deck: <WalletCards color="brown" />{" "}
              <span>{deck.length} cards</span>
            </h1>
            <CollapsibleTrigger asChild>
              <Button variant="ghost">
                <ChevronsUpDown />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="flex gap-1 flex-wrap">
            {deck.map((card, index) => (
              <DeckCard key={`${card.id}-${index}`} card={card} />
            ))}
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold flex gap-3">
              Extra Deck: <WalletCards color="purple" />{" "}
              <span>{extraDeck.length} cards</span>
            </h1>
            <CollapsibleTrigger asChild>
              <Button variant="ghost">
                <ChevronsUpDown />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="flex gap-1 flex-wrap">
            {extraDeck.map((card, index) => (
              <DeckCard key={`${card.id}-${index}`} card={card} />
            ))}
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold flex gap-3">
              Side Deck: <WalletCards color="cyan" />{" "}
              <span>{sideDeck.length} cards</span>
            </h1>
            <CollapsibleTrigger asChild>
              <Button variant="ghost">
                <ChevronsUpDown />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="flex gap-1 flex-wrap">
            {sideDeck.map((card, index) => (
              <DeckCard key={`${card.id}-${index}`} card={card} />
            ))}
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}
