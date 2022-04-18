import { useState } from "react";

import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import Welcome from "./Pages/Welcome/Welcome";
import SuperBeingInfo from "./Pages/SuperBeingInfo";

function App() {
  const [apiReturnedData, setApiReturnedData] = useState("");

  return (
    <>
      <SearchBar />
      <div className="appContainer">
        <Welcome />
        <SuperBeingInfo apiReturnedData={apiReturnedData} />
      </div>
    </>
  );
}

export default App;
