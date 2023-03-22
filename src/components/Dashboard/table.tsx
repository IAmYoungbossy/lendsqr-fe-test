import "./styles/Table.css";
import {
  AppContext,
  AppContextProps,
} from "../../context/AppContext";
import { useContext } from "react";
import FilterForm from "./FilterForm";
import { UserDataType } from "../../types/types";
import { tableText } from "../../constant/textConstant";
import ThreeDots from "../../assets/dashboard-assets/table-icons/3dots-details-icon.png";

export default function Table() {
  const { state } = useContext(
    AppContext
  ) as AppContextProps;

  // Table Body
  const tableData = (user: UserDataType) => (
    <ContactRow
      key={user.id}
      org={user.orgName}
      email={user.email}
      phone={user.phoneNumber}
      username={user.userName}
      dateJoined={user.createdAt}
    />
  );

  //   Table Column Header
  const tableHeader = (text: string) => (
    <th key={text}>
      <div>
        {text}
        <img
          src={tableText.iconUrl}
          alt="Filter Icon"
        />
      </div>
    </th>
  );

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>{tableText.header.map(tableHeader)}</tr>
        </thead>
        <tbody>{state.allUsersData.map(tableData)}</tbody>
      </table>
      {/* <FilterForm /> */}
    </div>
  );
}

interface IContactRow {
  org: string;
  email: string;
  phone: string;
  username: string;
  dateJoined: string;
}

export function ContactRow({
  org,
  username,
  email,
  phone,
  dateJoined,
}: IContactRow) {
  return (
    <tr>
      <td>
        <span>{org}</span>
      </td>
      <td>
        <span>{username}</span>
      </td>
      <td>
        <span>{email}</span>
      </td>
      <td>
        <span>{phone}</span>
      </td>
      <td>
        <span>{dateJoined}</span>
      </td>
      <td>
        <div>
          <div>Active</div>
          <img
            src={ThreeDots}
            alt="Details"
          />
        </div>
        {/* <UserDetailsPopUp /> */}
      </td>
    </tr>
  );
}
