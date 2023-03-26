import "./styles/LoginForm.css";
import InputFields from "./InputFields";
import LoginButton from "./LoginButton";
import LendSqrLogo from "./LendSqrLogo";
import LoginInstruction from "./LoginInstruction";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <form className="login-form">
      <div>
        <LendSqrLogo />
        <LoginInstruction />
        <InputFields />
        <p>Forgot Password?</p>
        <Link to="/dashboard">
          <LoginButton>Login</LoginButton>
        </Link>
      </div>
    </form>
  );
}
