import "./styles/PabloSideImage.css";
import LendSqrLogo from "./LendSqrLogo";
import PabloImage from "../../assets/login-assets/pablo-sign-in.svg";

export default function PabloSideImage() {
  return (
    <div className="pablo-sign-in">
      <LendSqrLogo />
      <div>
        <img
          src={PabloImage}
          alt="Pablo Sign In"
        />
      </div>
    </div>
  );
}
