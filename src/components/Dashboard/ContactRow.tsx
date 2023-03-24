import {
  AppContext,
  AppContextProps,
} from "../../context/AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserDataType } from "../../types/types";
import { formatTime } from "../../helpers/helpers";
import { ACTION_TYPES } from "../../constant/objectConstant";
import ThreeDots from "../../assets/dashboard-assets/table-icons/3dots-details-icon.png";

interface IContactRow {
  user: UserDataType;
}

export function ContactRow({ user }: IContactRow) {
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

  return (
    <tr
      onClick={() =>
        dispatch({
          type: ACTION_TYPES.SINGLE_USER_DETAILS,
          payload: user,
        })
      }
    >
      {tableData.map((td) => {
        return (
          <td key={td}>
            <span>{td}</span>
          </td>
        );
      })}
      <td>
        <div>
          <div>Active</div>
          <Link to={`user/${user.id}`}>
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
