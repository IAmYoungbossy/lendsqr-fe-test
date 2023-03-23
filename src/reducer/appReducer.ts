import {
  IActionType,
  AppStateType,
  UserDataType,
} from "../types/types";
import { updateState } from "../helpers/helpers";
import { ACTION_TYPES } from "../constant/objectConstant";

// Dashboard Initial State
export const initialState = {
  pageNumber: 0,
  allUsersData: [],
  pagesPerView: [],
  singleUserDetails: {},
};

export const appReducer = (
  state: AppStateType,
  action: IActionType
) => {
  switch (action.type) {
    case ACTION_TYPES.PAGE_NUMBER:
      return updateState(state, {
        pageNumber: action.payload as number,
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
        pagesPerView: action.payload as UserDataType[][],
      });

    default:
      return state;
  }
};
