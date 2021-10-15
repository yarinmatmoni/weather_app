import React,{useState,useEffect} from "react";
import GlobalStyle from "./components/GlobalStyle";
//Api
import {currentData} from "./api";
import axios from "axios";
//Componenets
import Header from "./components/Header";

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
      {weather && (
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
      )}
    </div>
  );
}

export default App;
