/* eslint-disable react/prop-types */
import { SelectedCardProperties } from "../../molecules/SelectedCardProperties";

import "./index.css";

export const CardDetails = ({ selectedCard, direction }) => (
  <div className="card-details">
    <div className={`chosen-card info-direction-${direction}`}>
      <img src={selectedCard.image} alt={selectedCard.name} />
      <SelectedCardProperties selectedCard={selectedCard} />
    </div>
  </div>
);
