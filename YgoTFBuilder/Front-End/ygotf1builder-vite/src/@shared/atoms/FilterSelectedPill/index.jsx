/* eslint-disable react/prop-types */
import { X } from "phosphor-react";

import "./index.css";

export const FilterSelectedPill = ({ id, name, value, removeFilter }) => {
  const handleRemoveFilter = () => {
    removeFilter(id);
  };

  return (
    <span className="selected-filter-pill">
      <span className="selected-filter-pill__name">{name}: </span>
      <span className="selected-filter-pill__value">{value}</span>
      <button
        className="selected-filter-pill__remove"
        onClick={handleRemoveFilter}
      >
        <X color="red" weight="bold" />
      </button>
    </span>
  );
};
