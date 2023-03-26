import {
  AppContext,
  AppContextProps,
} from "../../context/AppContext";
import Status from "./ActiveStatus";
import { UserDataType } from "../../types/types";
import UserDetailsPopUp from "./UserDetailsPopUp";
import { formatTime } from "../../helpers/helpers";
import { useState, useContext, useEffect } from "react";
import ThreeDots from "../../assets/dashboard-assets/table-icons/3dots-details-icon.png";

interface IContactRow {
  user: UserDataType;
}

export function ContactRow({ user }: IContactRow) {
  const [toggleDetails, setToggleDetails] = useState(false);
  const { dispatch } = useContext(
    AppContext
  ) as AppContextProps;

  const tableData = [
    user.orgName,
    user.userName,
    user.email,
    user.phoneNumber,
    formatTime(user.createdAt),
  ];

  useEffect(() => {
    const toggle = () => setToggleDetails(false);
    document.addEventListener("click", toggle);

    return () => {
      document.removeEventListener("click", toggle);
    };
  });

  return (
    <tr>
      {tableData.map((td) => {
        return (
          <td key={td}>
            <span>{td}</span>
          </td>
        );
      })}
      <td>
        <div>
          <Status status={user.active as string} />
          <img
            alt="Details"
            src={ThreeDots}
            onClick={(e) => {
              e.stopPropagation();
              setToggleDetails(!toggleDetails);
            }}
          />
          {toggleDetails && (
            <UserDetailsPopUp id={user.id} />
          )}
        </div>
      </td>
    </tr>
  );
}
