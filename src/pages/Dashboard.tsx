import {
  AppContext,
  AppContextProps,
} from "../context/AppContext";
import { useContext, useEffect } from "react";
import Table from "../components/Dashboard/table";
import { getListOfUsers } from "../helpers/helpers";
import UsersDetails from "../components/Dashboard/UsersDetails";

export default function Dashboard() {
  const { state, dispatch } = useContext(
    AppContext
  ) as AppContextProps;

  useEffect(() => {
    (async () => await getListOfUsers(dispatch))();
  }, []);

  return (
    <div>
      <UsersDetails />
      {state.allUsersData.length > 0 && <Table />}
    </div>
  );
}
