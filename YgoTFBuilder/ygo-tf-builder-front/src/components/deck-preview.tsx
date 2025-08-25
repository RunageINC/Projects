export const DeckPreview = ({
  deck,
}: {
  deck: Pick<PlayerDeck, "name" | "coverCard">;
}) => (
  <div className="border-gray-400 border-1 gap-2 rounded-sm w-[200px] h-[200px] flex flex-col items-center justify-center p-1 cursor-pointer">
    <img
      src={deck.coverCard}
      className=" min-h-[155px] max-w-[190px] rounded-sm"
    />
    <span>{deck.name}</span>
  </div>
);
