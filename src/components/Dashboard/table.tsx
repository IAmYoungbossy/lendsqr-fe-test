import "./styles/Table.css";
import {
  AppContext,
  AppContextProps,
} from "../../context/AppContext";
import { useContext } from "react";
import { ContactRow } from "./ContactRow";
import { UserDataType } from "../../types/types";
import Pagination from "../Pagination/Pagination";
import { tableText } from "../../constant/textConstant";

export default function Table() {
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
        {/* <FilterForm /> */}
      </div>
      <div>
        <Pagination />
      </div>
    </>
  );
}
