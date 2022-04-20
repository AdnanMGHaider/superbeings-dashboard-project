import classes from "./SuperBeingInfo.module.css";

import Biography from "../../Components/Biography/Biography";
import Appearance from "../../Components/Appearance/Appearance";
import Work from "../../Components/Work/Work";
import Chart from "../../Components/Chart/Chart";
import Connections from "../../Components/Connections/Connections";

const SuperBeingInfo = ({ apiReturnedData }) => {
  return (
    <>
      <h1>{apiReturnedData.name}</h1>
      <div className={classes.gridContainer}>
        <div className={classes.img1Container}>
          <img src={apiReturnedData.image.url} className={classes.img1} alt="" />
        </div>
        <Biography superBeingData={apiReturnedData} />
        <Appearance superBeingData={apiReturnedData} />
        <Work superBeingWork={apiReturnedData.work} />
        <Chart superBeingPowerstats={apiReturnedData.powerstats} />
        <Connections superBeingConnections={apiReturnedData.connections} />
      </div>
    </>
  );
};

export default SuperBeingInfo;
