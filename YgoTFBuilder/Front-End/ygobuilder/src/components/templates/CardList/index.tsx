import { Card } from "@/components/molecules/Card";

import "./index.css";

export const CardList = ({ cardList }: { cardList: Card[] }) => {
  return (
    <div className="card-list">
      {cardList.map((card: Card) => (
        <Card
          key={card.id}
          card={card}
          width={200}
          height={250}
          showRarity={false}
        />
      ))}
    </div>
  );
};
