import {
  prevPage,
  nextPage,
  setArrayContent,
  newPagesToDisplay,
  displayInitialPages,
} from "../../helpers/helpers";
import "./styles/Pagination.css";
import {
  AppContext,
  AppContextProps,
} from "../../context/AppContext";
import RowsPerView from "./RowsPerView";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { useEffect, useState, useContext } from "react";

export default function Pagination() {
  const {
    dispatch,
    state: { currentPage, pages },
  } = useContext(AppContext) as AppContextProps;

  const numberOfPages = pages.length;

  const [displayPages, setDisplayPages] = useState(
    displayInitialPages(numberOfPages)
  );

  useEffect(() => {
    if (numberOfPages < 6)
      setDisplayPages(setArrayContent(numberOfPages));
    if (currentPage < 3) {
      setDisplayPages([
        1,
        2,
        3,
        "...",
        numberOfPages - 1,
        numberOfPages,
      ]);
    }
    if (
      numberOfPages > 5 &&
      (currentPage + 1 > 3 ||
        currentPage + 1 < displayPages[numberOfPages - 2])
    ) {
      setDisplayPages(
        newPagesToDisplay(numberOfPages, currentPage)
      );
    }
  }, [numberOfPages, currentPage]);

  return (
    <div className="pagination-div">
      <RowsPerView />
      <div className="pagination">
        {/* The previous page button */}
        <div
          onClick={prevPage.bind(null, {
            dispatch,
            currentPage,
          })}
        >
          <BiChevronLeft />
        </div>
        <ul>
          {displayPages.map((item, index) => (
            <li key={`${item} ${index}`}>{item}</li>
          ))}
        </ul>
        {/* The next page button */}
        <div
          onClick={nextPage.bind(null, {
            numberOfPages,
            currentPage,
            dispatch,
          })}
        >
          <BiChevronRight />
        </div>
      </div>
    </div>
  );
}
