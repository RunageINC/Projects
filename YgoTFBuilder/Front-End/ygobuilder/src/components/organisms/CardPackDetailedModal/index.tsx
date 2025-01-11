import { Coins, GalleryHorizontalEnd, Lock, Wallet } from "lucide-react";

import { CardPackCoverImage } from "@/components/atoms/CardPackCoverImage";
import { CardWithTooltip } from "@/components/molecules/CardWithTooltip";
import { CardPack } from "@/components/molecules/CardPack";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import "./index.css";
import { ScrollArea } from "@/components/ui/scroll-area";

export const CardPackDetailedModal = ({ pack }: { pack: Pack }) => (
  <Popover>
    <PopoverTrigger>
      <CardPack pack={pack} />
    </PopoverTrigger>
    <PopoverContent
      className="h-[100vh] w-[80vw]"
      side="top"
      sideOffset={0}
      align="start"
    >
      <div className="flex gap-5">
        <CardPackCoverImage coverCard={pack.coverCard} size="large" />
        <div className="pack-information">
          <h3>{pack.name}</h3>
          <div>
            <Coins color="yellow" />
            <span>{pack.cost} DP</span>
          </div>
          <div>
            <GalleryHorizontalEnd color="#9a5353" />
            <span>x{pack.cardsPerPack}</span>
          </div>
          <div>
            <Wallet color="#9a5353" />
            <span>In Pack: {pack.cardsInPack}</span>
          </div>
          <div>
            <Lock color="white" />
            <span className="unlocked-by">{pack.unlockBy}</span>
          </div>
        </div>
      </div>
      <h3>Cards List</h3>
      <ScrollArea className="mt-5 h-[400px]">
        <div className="flex flex-wrap gap-5">
          {pack.cards.map((card) => (
            <CardWithTooltip
              showRarity
              key={card.id}
              card={card}
              width={80}
              height={100}
            />
          ))}
        </div>
      </ScrollArea>
    </PopoverContent>
  </Popover>
);
