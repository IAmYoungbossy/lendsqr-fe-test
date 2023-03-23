import {
  IActionType,
  AppStateType,
  UserDataType,
} from "../types/types";
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

/********************************************************
 * This function will take the table data array and will
 * return an array with arrays of items of the table data
 * split into any spacified number passed to it.
 ********************************************************/
export function splitArray(
  parts: number,
  array: UserDataType[]
) {
  const result = [];
  const chunkSize = Math.ceil(array.length / parts);
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

export const updateState = (
  state: AppStateType,
  updates: Partial<AppStateType>
) => {
  return {
    ...state,
    ...updates,
  };
};
