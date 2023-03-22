import { useContext, useEffect } from "react";
import getUsersData from "../api/fetchUserData";
import Table from "../components/Dashboard/table";
import { ACTION_TYPES } from "../reducer/DashboardReducer";
import UsersDetails from "../components/Dashboard/UsersDetails";
import { AppContext, DbContextProps } from "../context/AppContext";

export default function DashboardPage() {
  const { dispatch } = useContext(AppContext) as DbContextProps;

  useEffect(() => {
    (async () => {
      const { allUserData } = await getUsersData();
      dispatch({ type: ACTION_TYPES.ALL_USERS_DATA, payload: allUserData });
    })();
  }, []);

  return (
    <div>
      <UsersDetails />
      <Table />
    </div>
  );
}
