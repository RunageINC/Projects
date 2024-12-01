/* eslint-disable react/prop-types */
import { filterTypes } from "./filterTypes";

import "./index.css";

const FreeTextInput = ({ paramValue, setParamValue }) => (
  <input
    type="text"
    className="filter-input"
    placeholder="Type a value for the filter"
    value={paramValue}
    onChange={(event) => setParamValue(event.target.value)}
  />
);

const DropdownInput = ({ setParamValue, options }) => {
  const handleParamValue = (event) => {
    setParamValue(event.target.value);
  };

  return (
    <select className="dropdown" name="" id="" onChange={handleParamValue}>
      {options.map((option) => (
        <option
          key={option.name}
          value={option.name}
          selected={option.selected}
        >
          {option.text}
        </option>
      ))}
    </select>
  );
};

const NumberInput = ({ paramValue, setParamValue, min, max }) => (
  <input
    type="number"
    className="filter-input"
    placeholder="Type a value for the filter"
    value={paramValue}
    min={min}
    max={max}
    onChange={(event) => setParamValue(Number(event.target.value))}
  />
);

export const DynamicFilter = ({ paramValue, setParamValue, paramType }) => {
  const chosenFilter = filterTypes[paramType];
  if (chosenFilter.type === "free-text") {
    return (
      <FreeTextInput paramValue={paramValue} setParamValue={setParamValue} />
    );
  } else if (chosenFilter.type === "dropdown") {
    return (
      <DropdownInput
        setParamValue={setParamValue}
        options={chosenFilter.options}
      />
    );
  } else if (chosenFilter.type === "number") {
    return (
      <NumberInput
        paramValue={paramValue}
        setParamValue={setParamValue}
        min={chosenFilter.min}
        max={chosenFilter.max}
      />
    );
  }

  return null;
};
