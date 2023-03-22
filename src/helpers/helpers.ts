import { IActionType } from "../types/types";
import getUsersData from "../api/fetchUserData";
import { ACTION_TYPES } from "../constant/objectConstant";

export const getListOfUsers = async (
  dispatch: React.Dispatch<IActionType>
) => {
  const { allUserData } = await getUsersData();
  dispatch({
    type: ACTION_TYPES.ALL_USERS_DATA,
    payload: allUserData,
  });
};
