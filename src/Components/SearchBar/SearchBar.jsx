import classes from "./SearchBar.module.css";
import SearchIcon from "../../Assets/SearchIcon.jsx";
import SearchData from "./SearchData.json";

const SearchBar = () => {
  return (
    <div className={classes.searchBar}>
      <input className={classes.input} type="text" autoComplete="off" placeholder="Enter Superbeing Name..."></input>
      <button>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
