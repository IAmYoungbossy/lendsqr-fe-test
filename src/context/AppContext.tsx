import {
  DbReducer,
  DbInitialState,
  ActionPayloadTypes,
  DbInitialStateType,
} from "../reducer/DashboardReducer";
import { createContext, useReducer } from "react";
import { AppDataProviderProps } from "../types/types";

export type DbContextProps = {
  state: DbInitialStateType;
  dispatch: React.Dispatch<ActionPayloadTypes>;
};

export const AppContext = createContext<DbContextProps | null>(null);

const AppDataProvider = ({ children }: AppDataProviderProps) => {
  const [state, dispatch] = useReducer(DbReducer, DbInitialState);
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppDataProvider;
