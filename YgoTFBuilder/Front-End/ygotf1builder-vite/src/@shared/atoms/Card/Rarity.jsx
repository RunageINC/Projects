import "./Rarity.css";

/* eslint-disable react/prop-types */
const RARITY_DESIGN = {
  "Ultra Rare": {
    acronym: "UR",
    style: "ultra-rare",
  },
  "Super Rare": {
    acronym: "SR",
    style: "super-rare",
  },
  Rare: {
    acronym: "R",
    style: "rare",
  },
  Common: {
    acronym: "C",
    style: "common",
  },
};

export const Rarity = ({ rarityValue }) => {
  return (
    <div className={`rarity ${RARITY_DESIGN[rarityValue].style}`}>
      <span>{RARITY_DESIGN[rarityValue].acronym}</span>
    </div>
  );
};
