import React from "react";
import GlobalStyle from "./components/GlobalStyle";
//Componenets
import Info from "./components/Info";

function App() {


  return (
    <div className="App">
      <GlobalStyle/>
      <h1>Weather App</h1>
      <Info/>
      {/* {weather && (
        <div>
          <Header localtime={weather.location.localtime}/>
          <h2>{weather.location.country}</h2>
          <h2>{weather.location.name}</h2>
          <h2>{}</h2>
          <h2>{weather.current.last_updated}</h2>
          <h2>{weather.current.temp_c}</h2>
          <img src={weather.current.condition.icon} alt={weather.current.condition.text}></img>
          <h2>{weather.current.wind_kph}</h2>
          <h2>{weather.current.uv}</h2>
        </div>
      )} */}
    </div>
  );
}

export default App;
