import cardBack from "../../../../assets/YgoCard.jpg";

import "./index.css";

export const CardListOption = () => (
  <a href="/cards">
    <div className="menu-option__card-display">
      <img className="card" src={cardBack} alt="Card background image" />
      <img className="card" src={cardBack} alt="Card background image" />
      <img className="card" src={cardBack} alt="Card background image" />
    </div>
  </a>
);
