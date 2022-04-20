import classes from "./Biography.module.css";

const Biography = ({ superBeingData }) => {
  return (
    <div className={classes.bio}>
      <h3 className={classes.bioHeading}>BIOGRAPHY</h3>
      <table>
        <tbody>
          <tr>
            <th className={classes.tableHeading}>FULL NAME</th>
            <td className={`${classes.tableData} ${classes.odd}`}>{superBeingData.biography["full-name"]}</td>
          </tr>
          <tr>
            <th className={classes.tableHeading}>GENDER</th>
            <td className={`${classes.tableData} ${classes.even}`}>{superBeingData.appearance.gender}</td>
          </tr>
          <tr>
            <th className={classes.tableHeading}>BIRTH PLACE</th>
            <td className={`${classes.tableData} ${classes.odd}`}>{superBeingData.biography["place-of-birth"]}</td>
          </tr>
          <tr>
            <th className={classes.tableHeading}>RACE</th>
            <td className={`${classes.tableData} ${classes.even}`}>{superBeingData.appearance.race}</td>
          </tr>
          <tr>
            <th className={classes.tableHeading}>ALIAS(ES)</th>
            <td className={`${classes.tableData} ${classes.odd}`}>{superBeingData.biography.aliases}</td>
          </tr>
          <tr>
            <th className={classes.tableHeading}>ALTER EGO(S)</th>
            <td className={`${classes.tableData} ${classes.even}`}>{superBeingData.biography["alter-egos"]}</td>
          </tr>
          <tr>
            <th className={classes.tableHeading}>PUBLISHER</th>
            <td className={`${classes.tableData} ${classes.odd}`}>{superBeingData.biography.publisher}</td>
          </tr>
          <tr>
            <th className={classes.tableHeading}>FIRST APPEARANCE</th>
            <td className={`${classes.tableData} ${classes.even}`}>{superBeingData.biography["first-appearance"]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Biography;
