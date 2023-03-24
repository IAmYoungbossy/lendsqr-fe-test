import "./styles/RowPerView.css";
import { BiChevronDown } from "react-icons/bi";

export default function RowsPerView() {
  return (
    <div className="rows-per-view">
      <label htmlFor="rows-per-view">Showing</label>
      <div>
        <select
          className="demo"
          defaultValue="10"
          id="rows-per-view"
          name="rows-per-view"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <BiChevronDown />
      </div>
      <span>out of 100</span>
    </div>
  );
}
