import {
  AppContext,
  AppContextProps,
} from "../context/AppContext";
import { useContext, useEffect } from "react";
import Table from "../components/Dashboard/Table";
import {
  getListOfUsers,
  splitArray,
} from "../helpers/helpers";
import UsersDetails from "../components/Dashboard/UsersDetails";
import { ACTION_TYPES } from "../constant/objectConstant";

export default function Dashboard() {
  const { state, dispatch } = useContext(
    AppContext
  ) as AppContextProps;

  useEffect(() => {
    (async () => await getListOfUsers(dispatch))();
  }, []);

  useEffect(() => {
    dispatch({
      type: ACTION_TYPES.TABLE_SIZE_PER_VIEW,
      payload: splitArray(11, state.allUsersData),
    });
  }, [state.allUsersData]);

  return (
    <div>
      <UsersDetails />
      {state.pages.length > 0 && <Table />}
    </div>
  );
}
