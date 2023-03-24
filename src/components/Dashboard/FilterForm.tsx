import "./styles/FilterForm.css";
import { BiChevronDown } from "react-icons/bi";
import { filterInputFields } from "../../constant/textConstant";

export default function FilterForm() {
  return (
    <form
      className="filter-form"
      onClick={(e) => e.stopPropagation()}
    >
      {filterInputFields.map((inputField) => (
        <div key={inputField.label}>
          <label htmlFor={inputField.label}>
            {inputField.label}
          </label>
          <div>
            <input
              id={inputField.label}
              type={inputField.type}
              placeholder={inputField.placeholder}
            />
            {inputField.type === "select" && (
              <BiChevronDown />
            )}
          </div>
        </div>
      ))}
      <div>
        <button>Reset</button>
        <button>Filter</button>
      </div>
    </form>
  );
}
