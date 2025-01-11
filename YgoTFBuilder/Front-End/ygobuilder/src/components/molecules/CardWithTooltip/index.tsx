import "./index.css";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { Card } from "../Card";

interface CardProps {
  card: Card;
  width: number;
  height: number;
  showRarity: boolean;
}

export const CardWithTooltip = (props: CardProps) => (
  <TooltipProvider>
    <Tooltip delayDuration={100}>
      <TooltipTrigger>
        <Card {...props} />
      </TooltipTrigger>
      <TooltipContent>
        <Card {...props} height={300} width={250} />
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
