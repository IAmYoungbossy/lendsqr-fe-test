import { UserDataType } from "../types/types";

export const ACTION_TYPES = {
  ALL_USERS_DATA: "ALL USERS DATA",
};

export type DbInitialStateType = {
  allUsersData: UserDataType[] | [];
  userDetails: UserDataType | {};
};

// Dashboard Initial State
export const DbInitialState = {
  userDetails: {},
  allUsersData: [],
};

export type ActionPayloadTypes = {
  type: string;
  payload: UserDataType[] | UserDataType;
};

// Dashboard Reducer
export const DbReducer = (
  state: DbInitialStateType,
  action: ActionPayloadTypes
) => {
  switch (action.type) {
    case ACTION_TYPES.ALL_USERS_DATA:
      return { ...state };
    default:
      return state;
  }
};
