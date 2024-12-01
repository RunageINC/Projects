/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import { SearchFilters } from "../../molecules/SearchFilters";
import { CardList } from "../../molecules/CardList";
import { PageNumbers } from "../../molecules/PageNumbers";

import { fetchWithPagination, fetchWithFilters } from "../../../api/cards";

import "./index.css";

export const CardSearcher = ({
  onCardClick = () => {},
  onCardHover = () => {},
  cardOnListWidth,
  cardOnListHeight,
  showCardRarity,
  wrapFilters,
}) => {
  const [cardList, setCardList] = useState([]);
  const [pageConfiguration, setPageConfiguration] = useState({
    page: 0,
    size: 50,
    sortBy: "name",
  });
  const [backendPageSettings, setBackendPageSettings] = useState({});
  const [filters, setFilters] = useState([]);

  const handlePageChange = (pageNumber) => {
    setPageConfiguration((prev) => ({ ...prev, page: pageNumber }));
  };

  const fetchAllCards = () => {
    fetchWithPagination(pageConfiguration).then((data) => {
      setCardList(data.content);
      setBackendPageSettings(data);
    });
  };

  const clearFilters = () => {
    setFilters([]);
    setPageConfiguration({ page: 0, size: 50, sortBy: "name" });
    fetchAllCards();
  };

  useEffect(() => {
    if (!filters.length) {
      fetchAllCards();
      return;
    }

    fetchWithFilters(filters).then(setCardList);
  }, [filters]);

  useEffect(() => {
    fetchAllCards();
  }, [pageConfiguration]);

  return (
    <>
      <SearchFilters
        filters={filters}
        setFilters={setFilters}
        clearFilters={clearFilters}
        wrap={wrapFilters}
      />
      <div className="card-list">
        <CardList
          cardList={cardList}
          onCardClick={onCardClick}
          onCardHover={onCardHover}
          cardHeight={cardOnListHeight}
          cardWidth={cardOnListWidth}
          showCardRarity={showCardRarity}
        />
      </div>
      {!filters.length && (
        <PageNumbers
          pageSettings={backendPageSettings}
          pageConfiguration={pageConfiguration}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};
