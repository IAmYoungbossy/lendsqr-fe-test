import "./styles/Header.css";
import SearchBar from "./SearchBar";
import LendSqrLogo from "../Login/LendSqrLogo";
import UserNotification from "./UserNotification";
import { toggleNavBar } from "../../helpers/helpers";

export default function Header() {
  return (
    <header>
      <span
        className="menu"
        onClick={(e) => {
          e.stopPropagation();
          toggleNavBar("280px");
        }}
      >
        &#9776;
      </span>
      <div className="logo-search-bar">
        <LendSqrLogo />
        <SearchBar />
      </div>
      <UserNotification />
    </header>
  );
}
