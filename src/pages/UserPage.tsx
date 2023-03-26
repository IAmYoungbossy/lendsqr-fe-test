import {
  AppContext,
  AppContextProps,
} from "../context/AppContext";
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { fetchUserData } from "../helpers/helpers";
import NavPanel from "../components/UserInfo/NavPanel";
import AccountInfoCard from "../components/UserInfo/AccountInfoCard";
import PersonalDetails from "../components/UserInfo/PersonalDetails";

export default function UserPage() {
  const {
    dispatch,
    state: { singleUserDetails },
  } = useContext(AppContext) as AppContextProps;
  const { id } = useParams();

  useEffect(() => {
    (async () => await fetchUserData({ id, dispatch }))();
  }, [id]);

  return (
    <div>
      <NavPanel />
      {Object.keys(singleUserDetails).length !== 0 && (
        <>
          <AccountInfoCard />
          <PersonalDetails />
        </>
      )}
    </div>
  );
}
