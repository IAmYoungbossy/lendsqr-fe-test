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
import { ACTION_TYPES } from "../../constant/objectConstant";

interface PrevColorProps {
  currentPage: number;
}
interface OpacityProps extends PrevColorProps {
  item: number | string;
}
interface NextColorProps extends PrevColorProps {
  numberOfPages: number;
}

const prevColor = ({ currentPage }: PrevColorProps) =>
  currentPage + 1 === 1 ? "0.4" : "1";

const nextColor = ({
  numberOfPages,
  currentPage,
}: NextColorProps) =>
  currentPage + 1 === numberOfPages ? "0.4" : "1";

const opacity = ({ item, currentPage }: OpacityProps) =>
  currentPage + 1 === item ? "1" : "0.5";

const currentPageOpacity = ({
  item,
  currentPage,
}: OpacityProps) => {
  return {
    opacity: opacity({ currentPage, item }),
  };
};

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
          <BiChevronLeft
            style={{ opacity: prevColor({ currentPage }) }}
          />
        </div>
        <ul>
          {displayPages.map((item, index) => (
            <li
              style={currentPageOpacity({
                item,
                currentPage,
              })}
              onClick={() => {
                if (typeof item === "number") {
                  dispatch({
                    type: ACTION_TYPES.PAGE_NUMBER,
                    payload: +item - 1,
                  });
                }
              }}
              key={`${item} ${index}`}
            >
              {item}
            </li>
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
          <BiChevronRight
            style={{
              opacity: nextColor({
                currentPage,
                numberOfPages,
              }),
            }}
          />
        </div>
      </div>
    </div>
  );
}
