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

export const displayInitialPages = (pages: number) => {
  if (pages > 5) {
    return [1, 2, 3, "...", pages - 1, pages];
  }
  return [1, 2, 3, 4, 5];
};

export const newPagesToDisplay = (
  pages: number,
  currentPage: number
) => {
  if (pages - 1 - currentPage <= 1 && pages > 5) {
    if (currentPage >= pages - 1) {
      return [1, 2, 3, "...", pages - 1, pages];
    }
    return [1, 2, "...", currentPage, pages - 1, pages];
  }
  return [
    1,
    2,
    "...",
    currentPage,
    "...",
    pages - 1,
    pages,
  ];
};

export const setArrayContent = (pages: number) => {
  let newPagesToDisplay = [];
  for (let i = 1; i <= pages; i++) {
    newPagesToDisplay.push(i);
  }
  return newPagesToDisplay;
};
