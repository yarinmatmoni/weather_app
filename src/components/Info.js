import React,{useState,useEffect}  from 'react';
//Api
import {currentData} from "../api";
import axios from "axios";
//Components
import Search from './Search';
import Result from './Result';

function Info() {

    const [weather,setWeather] = useState(null);
    
    useEffect(()=>{
        axios.get(currentData("Rison Le Zion")).then((data)=>{
        setWeather(data.data);
        })
    },[]);

    return (
        <>
            {weather && (
                <>
                    <Search weather={weather.location.localtime}/>
                    <Result/>
                </>
            )}
        </>
    )
};


export default Info;
