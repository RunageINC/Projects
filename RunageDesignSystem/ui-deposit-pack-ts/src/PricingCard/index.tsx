import { CheckCheckIcon, CreditCard } from "lucide-react";

import rulerDark from "./ruler-dark.svg";
import rulerLight from "./ruler-light.svg";

import "./index.css";

interface PricingCard {
  value: number;
  accessType: string;
  accessTime: string;
  currency: string;
  theme: "light" | "dark";
  offer: string[];
}

const ruler = {
  dark: rulerDark,
  light: rulerLight,
};

export const PricingCard = ({
  value,
  accessType,
  accessTime,
  currency,
  theme = "light",
  offer,
}: PricingCard) => (
  <div className="uiDepositPack-PricingCard">
    <div className="pricingCardBodyBg" />
    <div className={`pricingCardBody pricingCardBody-${theme}`}>
      <div className="pricingCardBodyValues">
        <span className="pricingCardValuesTitle">{accessType}</span>
        <span className={`pricingCardValue pricingCardValue-${theme}`}>
          <span className={`currency currency-${theme}`}>{currency}</span>
          {value}
        </span>
        <span
          className={`pricingCardValuesFooter pricingCardValuesFooter-${theme}`}
        >
          {accessTime}
        </span>
      </div>
      <img src={ruler[theme]} alt="" />
      <div className="pricingCardValuesOffers">
        {offer.map((offer, index) => (
          <div key={index} className="offerItem">
            <span className={`offerIcon offerIcon-${theme}`}>
              <CheckCheckIcon size={16} />
            </span>
            <span>{offer}</span>
          </div>
        ))}
      </div>
      <img src={ruler[theme]} alt="" />
      <button className={`pricingCardButton pricingCardButton-${theme}`}>
        Buy now <CreditCard />
      </button>
    </div>
  </div>
);
