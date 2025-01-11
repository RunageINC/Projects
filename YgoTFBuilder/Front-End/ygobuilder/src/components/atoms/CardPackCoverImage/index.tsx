import duelAcademyCover from "./Duel Academy.png";

import Image from "next/image";

import "./index.css";

interface CardPackCoverImageProps {
  coverCard: string;
  size: 'small' | 'large';
}

export const CardPackCoverImage = ({ coverCard, size }: CardPackCoverImageProps) => {
  return coverCard === "Duel Academy" ? (
    <Image className={`pack-cover-card ${size}`} src={duelAcademyCover} alt="" />
  ) : (
    <Image
      className={`pack-cover-card ${size}`}
      src={coverCard}
      alt=""
      width={1000}
      height={1000}
    />
  );
};
