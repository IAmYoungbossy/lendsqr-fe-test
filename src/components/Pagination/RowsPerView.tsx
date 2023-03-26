import {
  AppContext,
  AppContextProps,
} from "../../context/AppContext";
import "./styles/RowPerView.css";
import { useContext } from "react";
import { BiChevronDown } from "react-icons/bi";
import { ACTION_TYPES } from "../../constant/objectConstant";

export default function RowsPerView() {
  const { dispatch } = useContext(
    AppContext
  ) as AppContextProps;

  return (
    <div className="rows-per-view">
      <label htmlFor="rows-per-view">Showing</label>
      <div>
        <select
          className="demo"
          defaultValue="11"
          id="rows-per-view"
          name="rows-per-view"
          onChange={(e) => {
            dispatch({
              type: ACTION_TYPES.TABLE_ROWS_NUMBER,
              payload: parseInt(e.target.value),
            });
            // Resets current page to 1 on each rows resize
            dispatch({
              type: ACTION_TYPES.PAGE_NUMBER,
              payload: 0,
            });
          }}
        >
          <option value="10">10</option>
          <option value="11">9</option>
          <option value="15">6</option>
          <option value="20">5</option>
        </select>
        <BiChevronDown />
      </div>
      <span>out of 100</span>
    </div>
  );
}
