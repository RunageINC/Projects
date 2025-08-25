export const DeckCard = ({
  card,
  onCardAction,
}: {
  card: Card;
  onCardAction?: (card: Card) => void;
}) => {
  const handleCardAction = () => {
    onCardAction?.(card);
  };

  return (
    <div className="max-w-[100px] cursor-pointer" onClick={handleCardAction}>
      <img src={card.image} />
    </div>
  );
};
