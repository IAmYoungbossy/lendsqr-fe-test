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
import { Link } from "react-router-dom";
import { ACTION_TYPES } from "../../constant/objectConstant";

export default function Table() {
  const { state } = useContext(
    AppContext
  ) as AppContextProps;

  // Table Body
  const tableData = (user: UserDataType) => (
    <ContactRow
      key={user.id}
      userObject={user}
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
  userObject: UserDataType;
}

export function ContactRow({
  org,
  email,
  phone,
  username,
  userObject,
  dateJoined,
}: IContactRow) {
  const { dispatch } = useContext(
    AppContext
  ) as AppContextProps;
  const tableData = [
    org,
    username,
    email,
    phone,
    dateJoined,
  ];

  return (
    <tr
      onClick={() =>
        dispatch({
          type: ACTION_TYPES.SINGLE_USER_DETAILS,
          payload: userObject,
        })
      }
    >
      {tableData.map((td) => (
        <td key={td}>
          <span>{td}</span>
        </td>
      ))}
      <td>
        <div>
          <div>Active</div>
          <Link to={`user/${userObject.id}`}>
            <img
              src={ThreeDots}
              alt="Details"
            />
          </Link>
        </div>
        {/* <UserDetailsPopUp /> */}
      </td>
    </tr>
  );
}
