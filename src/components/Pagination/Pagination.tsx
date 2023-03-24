import {
  setArrayContent,
  newPagesToDisplay,
  displayInitialPages,
} from "../../helpers/helpers";
import { useEffect, useState } from "react";

interface PaginationProps {
  pages: number;
  currentPage: number;
}

export default function Pagination({
  pages,
  currentPage,
}: PaginationProps) {
  const [displayPages, setDisplayPages] = useState(
    displayInitialPages(pages)
  );

  useEffect(() => {
    if (pages < 6) setDisplayPages(setArrayContent(pages));
    if (
      pages > 5 &&
      (currentPage > 3 ||
        currentPage < displayPages[pages - 2])
    ) {
      setDisplayPages(
        newPagesToDisplay(pages, currentPage)
      );
    }
  }, [pages, currentPage]);

  return (
    <div>
      <div>prev</div>
      <ul>
        {displayPages.map((item, index) => (
          <li key={`${item} ${index}`}>{item}</li>
        ))}
      </ul>
      <div>next</div>
    </div>
  );
}
