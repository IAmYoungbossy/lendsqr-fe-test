import InputFields from "./InputFields";
import LoginInstruction from "./LoginInstruction";

export default function LoginForm() {
  return (
    <form>
      <LoginInstruction />
      <InputFields />
    </form>
  );
}
