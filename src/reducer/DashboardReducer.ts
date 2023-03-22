import { ACTION_TYPES } from "../constant/objectConstant";
import { AppStateType, IActionType } from "../types/types";

// Dashboard Initial State
export const initialState = {
  allUsersData: [],
};

// Dashboard Reducer
export const AppReducer = (
  state: AppStateType,
  action: IActionType
) => {
  switch (action.type) {
    case ACTION_TYPES.ALL_USERS_DATA:
      return { ...state, allUsersData: action.payload };
    default:
      return state;
  }
};
