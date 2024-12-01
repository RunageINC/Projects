/* eslint-disable react/prop-types */
import { PageNumber } from "../../atoms/PageNumber";

import "./index.css";

export const PageNumbers = ({
  pageSettings,
  pageConfiguration,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 0; i < pageSettings.totalPages; i++) {
      pageNumbers.push(
        <PageNumber
          key={i}
          number={i}
          text={i + 1}
          setPageNumber={onPageChange}
          selected={pageConfiguration.page === i}
        />
      );
    }

    return pageNumbers;
  };

  return (
    <div className="page-numbers">
      <h4>Pages: </h4>
      {renderPageNumbers()}
    </div>
  );
};
