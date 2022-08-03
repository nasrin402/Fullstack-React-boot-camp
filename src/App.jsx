import { useState } from "react";
import TemparetureInput from "./TemparetureInput";
import { toCelsius, toFahrenheit, tryConvert } from "./utils";
import "./App.css";
function App() {
  const [state, setState] = useState({
    temperature: "",
    scale: "c",
  });
  const handleCelciusChange = (temperature) => {
    setState({
      temperature,
      scale: "c",
    });
  };
  const handleFahrenheitChange = (temperature) => {
    setState({
      temperature,
      scale: "f",
    });
  };
  const scale = state.scale;
  const temperature = state.temperature;
  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
  return (
    <div className="main">
      <div className="box">
        <h2> ºF to ºC converter or ºC to ºF converter App</h2>
        <TemparetureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={handleCelciusChange}
        />
        <TemparetureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={handleFahrenheitChange}
        />
      </div>
    </div>
  );
}

export default App;
