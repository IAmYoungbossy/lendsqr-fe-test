import "./styles/Header.css";
import SearchBar from "./SearchBar";
import LendSqrLogo from "../Login/LendSqrLogo";
import UserNotification from "./UserNotification";

export default function Header() {
  return (
    <header>
      <span className="menu">&#9776;</span>
      <div className="logo-search-bar">
        <LendSqrLogo />
        <SearchBar />
      </div>
      <UserNotification />
    </header>
  );
}
