import React,{useState,useEffect} from "react";
import GlobalStyle from "./components/GlobalStyle";
//Api
import {currentData} from "./api";
import axios from "axios";
 
function App() {

  const [weather,setWeather] = useState(null);

  useEffect(()=>{
    axios.get(currentData("Rison Le Zion")).then((data)=>{
      setWeather(data.data);
    })
  },[]);
  
  return (
    <div className="App">
      <GlobalStyle/>
      <h1>Weather App</h1>
      {weather && (
        <div>
          <h2>{weather.location.country}</h2>
          <h2>{weather.location.name}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
