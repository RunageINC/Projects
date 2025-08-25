import { Card } from "@/components/card";
import { useCards } from "@/components/context/useCards";
import { PaginationBar } from "@/components/pagination-bar";

export function CardList() {
  const { cardData } = useCards();

  return (
    <div className="w-[100dvw]">
      <h1 className="text-xl text-center">All cards</h1>
      <div className="flex flex-col gap-3">
        <div className="flex gap-1 flex-wrap">
          {cardData?.data &&
            cardData.data.map((card) => <Card card={card} key={card.id} />)}
        </div>
        <div className="flex">
          {cardData?.data && (
            <PaginationBar
              totalPages={cardData.totalPages}
              currentPage={cardData.page}
            />
          )}
        </div>
      </div>
    </div>
  );
}
