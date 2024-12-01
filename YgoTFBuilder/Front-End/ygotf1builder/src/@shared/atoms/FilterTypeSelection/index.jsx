import { filters } from "./filters";

import "./index.css";

export const FilterTypeSelection = ({ setParamType }) => {
  const handleSearchParamType = (event) => {
    setParamType(event.target.value);
  };

  return (
    <select className="dropdown" name="" id="" onChange={handleSearchParamType}>
      {filters.map((filter) => (
        <option
          key={filter.name}
          value={filter.name}
          selected={filter.selected}
        >
          {filter.text}
        </option>
      ))}
    </select>
  );
};
