import "./styles/PhoneNav.css";
import SideNavBar from "../Dashboard/SideNavBar";
import { toggleNavBar } from "../../helpers/helpers";
import Logo from "../../assets/login-assets/Group.svg";

export default function PhoneNav() {
  return (
    <div
      onClick={toggleNavBar.bind(null, "0px")}
      id="phone-nav-container"
      className="phone-nav-container"
    >
      <div
        id="phone-nav"
        className="phone-nav"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={Logo}
          alt="Logo"
        />
        <span onClick={toggleNavBar.bind(null, "0px")}>
          &times;
        </span>
        <SideNavBar />
      </div>
    </div>
  );
}
