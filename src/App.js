import "./App.css";
import Welcome from "./Components/Welcome/Welcome";
import Biography from "./Components/Biography/Biography";
import Appearance from "./Components/Appearance/Appearance";
import Work from "./Components/Work/Work";
import Chart from "./Components/Chart/Chart";
import Connections from "./Components/Connections/Connections";

function App() {
  return (
    <div className="App">
      <Welcome />
      <Biography />
      <Appearance />
      <Work />
      <Chart />
      <Connections />
    </div>
  );
}

export default App;
