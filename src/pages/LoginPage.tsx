import "./styles/LoginPage.css";
import LoginForm from "../components/Login/LoginForm";
import PabloSideImage from "../components/Login/pabloSideImage";

export default function LoginPage() {
  return (
    <div className="login-page">
      <PabloSideImage />
      <LoginForm />
    </div>
  );
}
