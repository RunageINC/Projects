/* eslint-disable react/prop-types */
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { FilterTypeSelection } from "../../atoms/FilterTypeSelection";
import { SelectedFilters } from "../SelectedFilters";

import { DynamicFilter } from "../../atoms/DynamicFilter";
import { DynamicButton } from "../../atoms/DynamicButton";

import "./index.css";

export const SearchFilters = ({ filters, setFilters, clearFilters, wrap }) => {
  const [paramType, setParamType] = useState("name");
  const [paramValue, setParamValue] = useState("");

  const addSearchFilter = () => {
    let existingFilter = filters.find((filter) => filter.type === paramType);
    let newFilterList = [];

    if (existingFilter) {
      existingFilter.value = paramValue;

      newFilterList = filters.map((filter) =>
        filter.id === existingFilter.id ? existingFilter : filter
      );
    } else {
      const id = uuidv4();

      existingFilter = { id, type: paramType, value: paramValue };

      newFilterList = [...filters, existingFilter];
    }

    setFilters(newFilterList);
  };

  const handleRemoveFilter = (id) => {
    setFilters((prev) => prev.filter((filter) => filter.id !== id));
  };

  const handleAddFilterOnFetch = () => {
    if (!paramValue || paramValue === "") return;

    addSearchFilter();
  };

  return (
    <div className="search-filters">
      <h3>Search by: </h3>
      <div className={`search-filters-inputs ${wrap && "wrap"}`}>
        <div className="search-filters-inputs__text">
          <FilterTypeSelection setParamType={setParamType} />
          <DynamicFilter
            paramType={paramType}
            paramValue={paramValue}
            setParamValue={setParamValue}
          />
        </div>
        <div className="search-filters-inputs__buttons">
          <DynamicButton type="search" onClick={handleAddFilterOnFetch} />
          <DynamicButton type="delete" onClick={clearFilters} />
        </div>
      </div>
      <SelectedFilters
        filterArray={filters}
        removeFilter={handleRemoveFilter}
      />
    </div>
  );
};
