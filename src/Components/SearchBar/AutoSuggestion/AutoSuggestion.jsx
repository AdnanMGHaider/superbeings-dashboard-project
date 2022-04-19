import classes from "./AutoSuggestion.module.css";

const AutoSuggestion = ({ inputTypedName, onClickingSearch, SearchData }) => {
  return (
    <div className={classes.dropDown}>
      {SearchData.filter((item) => {
        const inputSearchTerm = inputTypedName.toLowerCase();
        const nameInSearchData = item.name.toLowerCase();

        return inputSearchTerm && nameInSearchData.startsWith(inputSearchTerm) && nameInSearchData !== inputSearchTerm;

        /*Code for mapping each filtered item to a separate div */
      }).map((item) => (
        <p className={classes.dropDownItem} key={item.id} onClick={() => onClickingSearch(item.name)}>
          {item.name}
        </p>
      ))}
    </div>
  );
};

export default AutoSuggestion;
