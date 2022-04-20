import classes from "./Work.module.css";

const Work = ({ superBeingWork }) => {
  return (
    <div className={classes.work}>
      <h3 className={classes.workHeading}>WORK</h3>
      <table>
        <tbody>
          <tr>
            <th className={classes.tableHeading}>OCCUPATION</th>
            <td className={`${classes.tableData} ${classes.odd}`}>{superBeingWork.occupation}</td>
          </tr>
          <tr>
            <th className={classes.tableHeading}>BASE</th>
            <td className={`${classes.tableData} ${classes.even}`}>{superBeingWork.base}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Work;
