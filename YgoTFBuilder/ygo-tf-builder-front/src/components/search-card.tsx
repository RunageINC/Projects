export const SearchCard = ({
  card,
  onCardSelect,
}: {
  card: Card;
  onCardSelect: (id: Card) => void;
}) => {
  const handleCardSelect = () => {
    onCardSelect(card);
  };

  return (
    <div className="max-w-[60px] cursor-pointer" onClick={handleCardSelect}>
      <img src={card.image} />
    </div>
  );
};
