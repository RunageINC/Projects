import { CardPackCoverImage } from "@/components/atoms/CardPackCoverImage";

import "./index.css";

export const CardPack = ({ pack }: { pack: Pack }) => (
  <div className="card-pack">
    <CardPackCoverImage coverCard={pack.coverCard} size="small" />
    <h3>{pack.name}</h3>
  </div>
);
