import {
  AppStateType,
  IActionType,
  UserDataType,
} from "../types/types";
import { ACTION_TYPES } from "../constant/objectConstant";

// Dashboard Initial State
export const initialState = {
  allUsersData: [],
  singleUserDetails: {},
};

// Dashboard Reducer
export const AppReducer = (
  state: AppStateType,
  action: IActionType
) => {
  switch (action.type) {
    case ACTION_TYPES.ALL_USERS_DATA:
      return {
        ...state,
        allUsersData: action.payload as UserDataType[],
      };

    case ACTION_TYPES.SINGLE_USER_DETAILS:
      return {
        ...state,
        singleUserDetails: action.payload as UserDataType,
      };

    default:
      return state;
  }
};
