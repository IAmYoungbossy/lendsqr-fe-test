import {
  IActionType,
  AppStateType,
  UserDataType,
} from "../types/types";
import { updateState } from "../helpers/helpers";
import { ACTION_TYPES } from "../constant/objectConstant";

// Dashboard Initial State
export const initialState = {
  pages: [],
  currentPage: 0,
  allUsersData: [],
  tableRowsNumber: 11,
  singleUserDetails: {},
};

export const appReducer = (
  state: AppStateType,
  action: IActionType
) => {
  switch (action.type) {
    case ACTION_TYPES.PAGE_NUMBER:
      return updateState(state, {
        currentPage: action.payload as number,
      });

    case ACTION_TYPES.ALL_USERS_DATA:
      return updateState(state, {
        allUsersData: action.payload as UserDataType[],
      });

    case ACTION_TYPES.SINGLE_USER_DETAILS:
      return updateState(state, {
        singleUserDetails: action.payload as UserDataType,
      });

    case ACTION_TYPES.TABLE_SIZE_PER_VIEW:
      return updateState(state, {
        pages: action.payload as UserDataType[][],
      });

    case ACTION_TYPES.TABLE_ROWS_NUMBER:
      return updateState(state, {
        tableRowsNumber: action.payload as number,
      });

    default:
      return state;
  }
};
