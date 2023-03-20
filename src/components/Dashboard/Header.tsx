import "./styles/Header.css";
import SearchBar from "./SearchBar";
import LendSqrLogo from "../Login/LendSqrLogo";
import UserNotification from "./UserNotification";

export default function Header() {
  return (
    <header>
      <div>
        <LendSqrLogo />
        <SearchBar />
      </div>
      <UserNotification />
    </header>
  );
}
