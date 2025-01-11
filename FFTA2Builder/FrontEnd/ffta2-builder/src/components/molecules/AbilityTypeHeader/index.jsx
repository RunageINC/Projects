import { AbilityTypeTag } from "@/components/atoms/AbilityTypeTag";

import './index.css';

export const AbilityTypeHeader = ({ ability }) => (
  <div className="ability-header-title">
    <AbilityTypeTag abilityType={ability.type} />
    <span className="ability-name">{ability.name}</span>
  </div>
);
