import { useQuery } from "@tanstack/react-query";

import { Card } from "@/components/Card";
import axios from "axios";
import { PaginationBar } from "@/components/pagination-bar";

export function Home() {
  const handleFetchQuery = async () => {
    const response = await axios.get<Pagination<Card>>(
      "http://localhost:3333/cards"
    );

    if (response.status === 200) {
      return response.data;
    }

    return null;
  };

  const { data: cardData } = useQuery({
    queryKey: ["cards"],
    queryFn: handleFetchQuery,
    refetchInterval: Infinity,
  });

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
