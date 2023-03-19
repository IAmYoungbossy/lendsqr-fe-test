import { loginFields } from "../../constant/textConstant";

export default function InputFields() {
  const displayInputFields = (loginField: string) => (
    <div>
      <input
        type={loginField}
        placeholder={loginField}
      />
    </div>
  );

  return <div>{loginFields.map(displayInputFields)}</div>;
}
