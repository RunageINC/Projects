import "./index.css";

import visaLogo from "./assets/VisaLogo.svg";
import mastercardLogo from "./assets/MastercardLogo.svg";
import chip from "./assets/Chip.svg";

interface PaymentCardProps {
  width?: number;
  height?: number;
  withPattern?: "1" | "2" | "3" | "4";
  color: "black" | "blue" | "purple" | "gold";
  flag: "visa" | "mastercard";
  cardType: "debit" | "credit";
}

const flagLogo = {
  visa: visaLogo,
  mastercard: mastercardLogo,
};

export const PaymentCard = ({
  width = 300,
  height = 180,
  withPattern = undefined,
  cardType,
  flag,
  color,
}: PaymentCardProps) => {
  const baseClass = "uiDepositPack-paymentCard";

  return (
    <div
      className={`${baseClass} paymentCardBody paymentCardRounded paymentCard-${color} ${
        withPattern ? `withPattern${withPattern}` : ""
      }`}
      style={{
        width: width,
        height: height,
      }}
    >
      <div className={`${baseClass} paymentCardNotch`}>
        <span
          style={{
            width: width / 3,
            height: height / 8,
          }}
        >
          {cardType.toUpperCase()} CARD
        </span>
        <img
          className="paymentCardChip"
          src={chip}
          alt="Chip"
          width={width / 12}
        />
      </div>
      <div className={`${baseClass} paymentCardNumber paymentCardRounded`}>
        <div className="paymentCardNumberSeparation">
          <span>****</span>
          <span>****</span>
          <span>****</span>
          <span>2859</span>
        </div>
      </div>
      <div className={`${baseClass} paymentCardFooter`}>
        <span className="paymentCardRounded paymentCardDueDateSection">
          Valid thru 06/24
        </span>
        <img src={flagLogo[flag]} alt="Card logo" />
      </div>
    </div>
  );
};
