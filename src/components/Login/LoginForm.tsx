import "./styles/LoginForm.css";
import InputFields from "./InputFields";
import LoginButton from "./LoginButton";
import LendSqrLogo from "./LendSqrLogo";
import LoginInstruction from "./LoginInstruction";

export default function LoginForm() {
  return (
    <form className="login-form">
      <div>
        <LendSqrLogo />
        <LoginInstruction />
        <InputFields />
        <p>Forgot Password?</p>
        <LoginButton>Login</LoginButton>
      </div>
    </form>
  );
}
