import "./styles/SearchBar.css";
import SearchBarIcon from "../../assets/dashboard-assets/searchbar-vector.png";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="search"
        name="search-bar"
      />
      <button>
        <img
          src={SearchBarIcon}
          alt="Search bar Icon"
        />
      </button>
    </div>
  );
}
