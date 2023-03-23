import {
  appReducer,
  initialState,
} from "../reducer/appReducer";
import {
  IActionType,
  AppStateType,
  AppDataProviderProps,
} from "../types/types";
import { createContext, useReducer } from "react";

export type AppContextProps = {
  state: AppStateType;
  dispatch: React.Dispatch<IActionType>;
};

export const AppContext =
  createContext<AppContextProps | null>(null);

const AppDataProvider = ({
  children,
}: AppDataProviderProps) => {
  const [state, dispatch] = useReducer(
    appReducer,
    initialState
  );
  const value = { state, dispatch };
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppDataProvider;
