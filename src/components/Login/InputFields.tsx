import { loginFields } from "../../constant/textConstant";

export default function InputFields() {
  const displayInputFields = (loginField: string) => (
    <div key={loginField}>
      <input
        type={loginField}
        placeholder={loginField}
      />
      {loginField === "Password" && <span>Show</span>}
    </div>
  );

  return <>{loginFields.map(displayInputFields)}</>;
}
