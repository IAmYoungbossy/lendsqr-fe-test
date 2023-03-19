import "./styles/PabloSideImage.css";
import PabloImage from "../../assets/login-assets/pablo-sign-in.svg";

export default function PabloSideImage() {
  return (
    <div className="pablo-sign-in">
      <img
        src={PabloImage}
        alt="Pablo Sign In"
      />
    </div>
  );
}
