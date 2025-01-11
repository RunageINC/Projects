import React, { useState } from "react";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { AbilityTypeHeader } from "@/components/molecules/AbilityTypeHeader";

import { ChevronsDown } from "lucide-react";

import "./index.css";

export const AbilityTypeCard = ({ ability }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      className="ability-card"
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <div className="ability-card-content">
        <div className="ability-header">
          <AbilityTypeHeader ability={ability} />
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronsDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
        </div>

        <p className="ability-description">{ability.description}</p>
      </div>

      <CollapsibleContent className="space-y-2">
        under construction
      </CollapsibleContent>
    </Collapsible>
  );
};
