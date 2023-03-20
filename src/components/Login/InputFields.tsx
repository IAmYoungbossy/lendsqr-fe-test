import { useState } from "react";
import { loginFields } from "../../constant/textConstant";

export default function InputFields() {
  const [showPassword, setShowPassword] = useState(false);

  // Define function to handle password visibility toggle
  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  // Define function to display input fields
  const displayInputFields = (loginField: string) => (
    <div key={loginField}>
      <input
        type={
          loginField === "Password"
            ? showPassword
              ? "text"
              : "password"
            : loginField
        }
        placeholder={loginField}
      />
      {loginField === "Password" && (
        // Show/hide password toggle
        <span onClick={handlePasswordVisibility}>
          {showPassword ? "Hide" : "Show"}
        </span>
      )}
    </div>
  );

  return <>{loginFields.map(displayInputFields)}</>;
}
