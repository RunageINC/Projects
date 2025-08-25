import { useCards } from "./context/useCards";
import { SearchCard } from "./search-card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, X } from "lucide-react";
import { useState } from "react";

interface AllCardsListProps {
  onAddCard: (card: Card) => void;
}

export const AllCardsList = ({ onAddCard }: AllCardsListProps) => {
  const { cardData, addFilter, clearFilters } = useCards();
  const [cardName, setCardName] = useState<string>("");

  const onAddFilter = () => {
    if (!cardName) return;

    addFilter("name", cardName);
  };

  const onRemoveFilter = () => {
    setCardName("");
    clearFilters();
  };

  return (
    <div className="w-[20vw]">
      <h1 className="text-xl text-center">All cards</h1>
      <div className="flex gap-2 mb-2 mt-2">
        <Input
          type="text"
          placeholder="Card name"
          onChange={(element) => setCardName(element.target.value)}
          value={cardName}
        ></Input>
        <Button className="text-white" onClick={onAddFilter} type="button">
          <Search />
        </Button>
        <Button
          className="text-white"
          variant="destructive"
          onClick={onRemoveFilter}
          type="button"
        >
          <X />
        </Button>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-1 flex-wrap">
          {cardData?.data &&
            cardData.data.map((card) => (
              <SearchCard card={card} key={card.id} onCardSelect={onAddCard} />
            ))}
        </div>
        {cardData?.data && (
          <Pagination>
            <PaginationContent className="flex gap-1 flex-wrap">
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>{cardData?.page}</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
};
