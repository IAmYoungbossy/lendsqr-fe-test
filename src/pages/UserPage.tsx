import NavPanel from "../components/UserInfo/NavPanel";
import AccountInfoCard from "../components/UserInfo/AccountInfoCard";
import PersonalDetails from "../components/UserInfo/PersonalDetails";

export default function UserPage() {
  return (
    <div>
      <NavPanel />
      <AccountInfoCard />
      <PersonalDetails />
    </div>
  );
}
