import "./styles/LendsqrLogo.scss";
import Logo from "../../assets/login-assets/Group.svg";

export default function LendSqrLogo() {
  return (
    <div className="lendsqr-logo">
      <img
        src={Logo}
        alt="Lend square logo"
      />
    </div>
  );
}
