import { useState, useEffect } from "react";
import { CardPack } from "./molecules/CardPack";
import { Card } from "../../@shared/atoms/Card";
import { GameTitle } from "../../@shared/atoms/GameTitle";

export const Packs = () => {
  const [packList, setPackList] = useState([]);
  const [selectedPack, setSelectedPack] = useState(null);
  const [packCardList, setPackCardList] = useState([]);
  const [allCardsList, setAllCardsList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/packs")
      .then((response) => response.json())
      .then((data) => setPackList(data));

    fetch("http://localhost:8080/cards")
      .then((res) => res.json())
      .then((data) => setAllCardsList(data));
  }, []);

  useEffect(() => {
    if (!selectedPack) return;

    const { cards } = selectedPack;
    const cardListWithDetails = new Array(cards.length);
    cards.forEach((card) => {
      const cardOnPackage = allCardsList.find(
        (cardFromDb) => cardFromDb.id === card.id
      );

      cardListWithDetails.push(cardOnPackage);
    });

    setPackCardList(cardListWithDetails);
  }, [selectedPack]);

  return (
    <>
      <GameTitle />
      {packList.length > 0 && (
        <div>
          <div className="pack-list">
            {packList.map((pack) => (
              <CardPack
                key={pack.id}
                pack={pack}
                setSelectedPack={setSelectedPack}
              />
            ))}
          </div>
          {packCardList.length > 0 && selectedPack && (
            <div className="card-pack__list">
              {packCardList.map(
                (card) => card && <Card card={card} key={card.id} />
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};
