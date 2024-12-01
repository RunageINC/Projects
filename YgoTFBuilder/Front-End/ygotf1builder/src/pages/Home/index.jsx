import { GameTitle } from "../../@shared/atoms/GameTitle";
import { CardListOption } from "./atoms/CardListOption";

import deckFolder from "../../assets/deck-folder.webp";

import "./index.css";

export const Home = () => {
  return (
    <>
      <GameTitle />
      <div className="main-menu">
        <a href="/cards" className="menu-option">
          <CardListOption />
          <h3>List All Cards</h3>
        </a>
        <a href="/decks" className="menu-option">
          <img src={deckFolder} width={120} height={160} />
          <h3>Build New Deck</h3>
        </a>
      </div>
    </>
  );
};
