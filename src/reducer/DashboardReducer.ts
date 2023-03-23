import {
  IActionType,
  AppStateType,
  UserDataType,
} from "../types/types";
import { ACTION_TYPES } from "../constant/objectConstant";
import { updateState } from "../helpers/helpers";

// Dashboard Initial State
export const initialState = {
  pageNumber: 0,
  allUsersData: [],
  pagesPerView: [],
  singleUserDetails: {},
};

export const AppReducer = (
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
