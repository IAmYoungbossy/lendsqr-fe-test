import "./styles/FilterForm.css";
import { filterInputFields } from "../../constant/textConstant";

export default function FilterForm() {
  return (
    <form className="filter-form">
      {filterInputFields.map((inputField) => (
        <div>
          <label htmlFor={inputField.label}>{inputField.label}</label>
          <input
            id={inputField.label}
            type={inputField.type}
            placeholder={inputField.placeholder}
          />
        </div>
      ))}
      <div>
        <button>Reset</button>
        <button>Filter</button>
      </div>
    </form>
  );
}
