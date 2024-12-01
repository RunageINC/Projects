/* eslint-disable react/prop-types */

import { Cardholder, Cards, Coin, Lock } from "phosphor-react";
import { SkeletonWrapper } from "../../../../@shared/atoms/SkeletonWrapper";
import duelAcademy from "../../../../assets/Duel Academy.png";

export const CardPack = ({ pack, setSelectedPack }) => {
  const packCoverImage =
    pack.coverCard === "Duel Academy" ? duelAcademy : pack.coverCard;

  return (
    <div className="card-pack" onClick={() => setSelectedPack(pack)}>
      {packCoverImage ? (
        <img src={packCoverImage} alt="" width={180} height={180} />
      ) : (
        <SkeletonWrapper width={180} height={180} />
      )}
      <h3>{pack.name}</h3>
      <div className="pack-information">
        <span className="pack-information__label">
          <Coin color="yellow" />
          {pack.cost} DP
        </span>
        <span className="pack-information__label">
          <Cards color="#9a5353" /> x{pack.cardsPerPack}
        </span>
        <span className="pack-information__label">
          <Cardholder color="#9a5353" />
          In Pack: {pack.cardsInPack}
        </span>
        <span className="pack-information__label">
          <Lock color="white" />
          <span>{pack.unlockBy}</span>
        </span>
      </div>
    </div>
  );
};
