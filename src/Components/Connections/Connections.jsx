import classes from "./Connections.module.css";

const Connections = ({ superBeingConnections }) => {
  return (
    <div className={classes.connections}>
      <h3 className={classes.connectionsHeading}>CONNECTIONS</h3>
      <div className={classes.connectionsDetails}>
        <table>
          <tbody>
            <tr>
              <th className={classes.tableHeading}>GROUP</th>
              <td className={`${classes.tableData} ${classes.odd}`}>{superBeingConnections["group-affiliation"]}</td>
            </tr>
            <tr>
              <th className={classes.tableHeading}>RELATIVES</th>
              <td className={`${classes.tableData} ${classes.even}`}>{superBeingConnections.relatives}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Connections;
