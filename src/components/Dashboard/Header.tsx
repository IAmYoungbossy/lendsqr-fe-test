import "./styles/Header.css";
import LendSqrLogo from "../Login/LendSqrLogo";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header>
      <div>
        <LendSqrLogo />
        <SearchBar />
      </div>
    </header>
  );
}
