import "./index.css";

export const PageNumber = ({ number, text, setPageNumber, selected }) => {
  const handlePageNumberClick = () => {
    setPageNumber(number);
  };

  const isPageSelected = selected ? "page-number page-selected" : "page-number";

  return (
    <button className={isPageSelected} onClick={handlePageNumberClick}>
      {text}
    </button>
  );
};
