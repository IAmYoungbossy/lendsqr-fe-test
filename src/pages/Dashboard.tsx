import { useContext, useEffect } from "react";
import getUsersData from "../api/fetchUserData";
import Table from "../components/Dashboard/table";
import { ACTION_TYPES } from "../constant/objectConstant";
import UsersDetails from "../components/Dashboard/UsersDetails";
import { AppContext, AppContextProps } from "../context/AppContext";

export default function Dashboard() {
  const { state, dispatch } = useContext(AppContext) as AppContextProps;

  useEffect(() => {
    (async () => {
      const { allUserData } = await getUsersData();
      dispatch({ type: ACTION_TYPES.ALL_USERS_DATA, payload: allUserData });
    })();
  }, []);

  return (
    <div>
      <UsersDetails />
      {state.allUsersData.length > 0 && <Table />}
    </div>
  );
}
