/* eslint-disable react/prop-types */
import "./index.css";

export const DeckLength = ({ deckSize, deckType }) => {
  const deckMainSize = () => {
    if (deckSize >= 40 && deckSize < 50) return "deck-size-ok";
    else if (deckSize >= 50 && deckSize <= 60) return "deck-size-warning";

    return "deck-size-wrong";
  };

  const extraMainSize = () => {
    if (deckSize <= 15) return "deck-size-ok";

    return "deck-size-wrong";
  };

  const sideMainSize = () => {
    if (deckSize <= 10) return "deck-size-ok";

    return "deck-size-wrong";
  };

  const handleDeckSize = () => {
    switch (deckType) {
      case "main":
        return deckMainSize();
      case "extra":
        return extraMainSize();
      case "side":
        return sideMainSize();
      default:
        return deckMainSize();
    }
  };

  return <span className={handleDeckSize()}>{deckSize}</span>;
};
