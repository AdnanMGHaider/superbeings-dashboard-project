import classes from "./Appearance.module.css";

const Appearance = ({ superBeingData }) => {
  return (
    <div className={classes.appearance}>
      <h3 className={classes.appearanceHeading}>APPEARANCE</h3>
      <table>
        <tbody>
          <tr>
            <th className={classes.tableHeading}>EYE COLOR</th>
            <td className={`${classes.tableData} ${classes.odd}`}>{superBeingData.appearance["eye-color"]}</td>
          </tr>
          <tr>
            <th className={classes.tableHeading}>HAIR COLOR</th>
            <td className={`${classes.tableData} ${classes.even}`}>{superBeingData.appearance["hair-color"]}</td>
          </tr>
          <tr>
            <th className={classes.tableHeading}>HEIGHT</th>
            <td className={`${classes.tableData} ${classes.odd}`}>{superBeingData.appearance.height[0]}</td>
          </tr>
          <tr>
            <th className={classes.tableHeading}>WEIGHT</th>
            <td className={`${classes.tableData} ${classes.even}`}>{superBeingData.appearance.weight[1]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Appearance;
