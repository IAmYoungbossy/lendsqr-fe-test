import {
  IActionType,
  AppStateType,
  AppDataProviderProps,
} from "../types/types";
import { createContext, useReducer } from "react";
import { AppReducer, initialState } from "../reducer/DashboardReducer";

export type AppContextProps = {
  state: AppStateType;
  dispatch: React.Dispatch<IActionType>;
};

export const AppContext = createContext<AppContextProps | null>(null);

const AppDataProvider = ({ children }: AppDataProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppDataProvider;
