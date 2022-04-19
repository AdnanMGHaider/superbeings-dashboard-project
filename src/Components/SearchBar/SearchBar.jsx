import { useState } from "react";
import axios from "axios";

import classes from "./SearchBar.module.css";
import SearchIcon from "../../Assets/SearchIcon.jsx";
import SearchData from "./SearchData.json";
import AutoSuggestion from "./AutoSuggestion/AutoSuggestion";

const SearchBar = ({ onReceivingDataFromApi }) => {
  const [inputTypedName, setInputTypedName] = useState("");
  const [showAutoSuggest, setShowAutoSuggest] = useState(false);

  /*Code for fetching superBeing data from api */

  const fetchSuperBeingData = () => {
    const matchingData = SearchData.find((item) => item.name.toLowerCase() === inputTypedName.toLowerCase());

    axios
      .get(`https://www.superheroapi.com/api.php/10159349810976154/${matchingData.id}`)
      .then((response) => {
        console.log(response.data);
        onReceivingDataFromApi(response.data);
      })
      .catch((error) => console.log(error));
  };

  ///////////////////////////////////////////////

  const onTyping = (event) => {
    setInputTypedName(event.target.value);

    if (event.target.value !== "") {
      setShowAutoSuggest(true);
    } else {
      setShowAutoSuggest(false);
    }
  };

  const onClickingSearch = (selectedTerm) => {
    console.log(selectedTerm);
    setInputTypedName(selectedTerm);
    setShowAutoSuggest(false);
  };

  return (
    <div>
      <div className={classes.searchBarSection}>
        <div className={classes.inputAndDropDown}>
          <input
            type="text"
            value={inputTypedName}
            // onBlur={() => {
            //   setShowAutoSuggest(false);
            // }}
            onChange={onTyping}
            autoComplete="off"
            placeholder="Enter Superbeing Name..."
          />
          {showAutoSuggest && <AutoSuggestion onClickingSearch={onClickingSearch} inputTypedName={inputTypedName} SearchData={SearchData} />}
          {/* {showAutoSuggest && (
            <div className={classes.dropDown}>
              {SearchData.filter((item) => {
                const inputSearchTerm = inputTypedName.toLowerCase();
                const nameInSearchData = item.name.toLowerCase();

                return inputSearchTerm && nameInSearchData.startsWith(inputSearchTerm) && nameInSearchData !== inputSearchTerm;
              }).map((item) => (
                <p className={classes.dropDownItem} key={item.id} onClick={() => onClickingSearch(item.name)}>
                  {item.name}
                </p>
              ))}
            </div>
          )} */}
        </div>
        <button onClick={fetchSuperBeingData}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
