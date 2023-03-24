import "./styles/Table.css";
import {
  AppContext,
  AppContextProps,
} from "../../context/AppContext";
import FilterForm from "./FilterForm";
import { ContactRow } from "./ContactRow";
import { UserDataType } from "../../types/types";
import Pagination from "../Pagination/Pagination";
import { useContext, useState, useEffect } from "react";
import { tableText } from "../../constant/textConstant";

export default function Table() {
  const [toggleFilter, setToggleFilter] = useState(false);

  useEffect(() => {
    const toggle = () => setToggleFilter(false);
    document.addEventListener("click", toggle);

    return () => {
      document.removeEventListener("click", toggle);
    };
  });

  const {
    state: { currentPage, pages },
  } = useContext(AppContext) as AppContextProps;

  // Table Body
  const tableData = (user: UserDataType) => (
    <ContactRow
      key={user.id}
      user={user}
    />
  );

  //   Table Column Header
  const tableHeader = (text: string) => (
    <th key={text}>
      <div>
        {text}
        <img
          alt="Filter Icon"
          src={tableText.iconUrl}
          onClick={(e) => {
            e.stopPropagation();
            setToggleFilter(!toggleFilter);
          }}
        />
      </div>
    </th>
  );

  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <tr>{tableText.header.map(tableHeader)}</tr>
          </thead>
          <tbody>{pages[currentPage].map(tableData)}</tbody>
        </table>
        {toggleFilter && <FilterForm />}
      </div>
      <div>
        <Pagination />
      </div>
    </>
  );
}
