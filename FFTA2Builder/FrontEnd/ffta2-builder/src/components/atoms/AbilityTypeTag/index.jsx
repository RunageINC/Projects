import "./index.css";

export const AbilityTypeTag = ({ abilityType }) => (
  <span className={`ability ${String(abilityType).toLowerCase()}`}>
    {abilityType}
  </span>
);
