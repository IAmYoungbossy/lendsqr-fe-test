import {
  splitArray,
  fetchUserData,
} from "../helpers/helpers";
import {
  AppContext,
  AppContextProps,
} from "../context/AppContext";
import { useContext, useEffect } from "react";
import Table from "../components/Dashboard/Table";
import { ACTION_TYPES } from "../constant/objectConstant";
import UsersDetails from "../components/Dashboard/UsersDetails";

export default function Dashboard() {
  const {
    state: { allUsersData, tableRowsNumber, pages },
    dispatch,
  } = useContext(AppContext) as AppContextProps;

  useEffect(() => {
    (async () => await fetchUserData({ dispatch }))();
  }, []);

  // Adds users active status
  useEffect(() => {
    dispatch({
      type: ACTION_TYPES.TABLE_SIZE_PER_VIEW,
      payload: splitArray(tableRowsNumber, allUsersData),
    });
  }, [allUsersData, tableRowsNumber]);

  return (
    <div>
      <UsersDetails />
      {pages.length > 0 && <Table />}
    </div>
  );
}
