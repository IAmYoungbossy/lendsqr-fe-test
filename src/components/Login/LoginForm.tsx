import InputFields from "./InputFields";
import LoginButton from "./LoginButton";
import LoginInstruction from "./LoginInstruction";

export default function LoginForm() {
  return (
    <form>
      <LoginInstruction />
      <InputFields />
      <p>Forgot Password?</p>
      <LoginButton>Login</LoginButton>
    </form>
  );
}
