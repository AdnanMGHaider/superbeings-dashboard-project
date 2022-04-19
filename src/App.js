import { useState } from "react";

import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import Welcome from "./Pages/Welcome/Welcome";
import SuperBeingInfo from "./Pages/SuperBeingInfo";

function App() {
  const [apiReturnedData, setApiReturnedData] = useState();

  const handleApiData = (responseData) => {
    setApiReturnedData(responseData);
  };

  return (
    <>
      <SearchBar onReceivingDataFromApi={handleApiData} />
      <div className="appContainer">{apiReturnedData ? <SuperBeingInfo apiReturnedData={apiReturnedData} /> : <Welcome />}</div>
    </>
  );
}

export default App;
