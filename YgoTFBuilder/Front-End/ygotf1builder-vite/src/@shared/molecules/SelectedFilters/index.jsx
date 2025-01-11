/* eslint-disable react/prop-types */
import { FilterSelectedPill } from "../../atoms/FilterSelectedPill";

import "./index.css";

export const SelectedFilters = ({ filterArray, removeFilter }) => {
  return (
    <div className="selected-filters">
      {filterArray.map((filter) => (
        <FilterSelectedPill
          key={filter.id}
          id={filter.id}
          name={filter.type}
          value={filter.value}
          removeFilter={removeFilter}
        />
      ))}
    </div>
  );
};
