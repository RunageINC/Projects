import puzzle from "./puzzleicon.png";

import Image from "next/image";

import './index.css';

export const MenuHeader = () => (
  <div className="ygo-builder__menu-header">
    <Image src={puzzle} alt="Millenium Puzzle" height={30} />
    <span>Yu-Gi-Oh! TF 1 Builder</span>
  </div>
);
