export const Card = ({ card }: { card: Card }) => {
  return (
    <div className="max-w-[200px]">
      <img src={card.image} />
    </div>
  );
};
