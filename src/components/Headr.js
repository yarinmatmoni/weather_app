import React,{useEffect, useState} from 'react';
import Card from './Card';
//Style
import styled from 'styled-components';
//Api
import axios from "axios";
import {currentData} from "../api";
import HourCard from './HourCard';

function Headr() {

    const [input,setInput] = useState("");
    const [locationName,setLocationName] = useState(null);
    const [searchResult,setSearchResult] = useState("");

    const inputHandler = (e) => {
        setInput(e.target.value);
    };

    const searchWether = () => {
        if(input !== "")
            setLocationName(input);
        setInput("");
    };

    useEffect(()=>{
        axios.get(currentData(locationName)).then((data) => {setSearchResult(data.data)});
    },[locationName]);
    
    const {forecast}  = searchResult;

    const CardsListInfo = () => {
        let array = [];
        array = forecast.forecastday[0].hour.filter((h)=> h.time.split(" ")[1].split(":")[0] > searchResult.current.last_updated.split(" ")[1].split(":")[0]);
        if(array.length < 5){
            const num = 5 - array.length;
            for(let i=0;i<num;i++ ){
                array.push( forecast.forecastday[1].hour[i]);
            }
        }
        return array.slice(0,5).map((h)=> <HourCard key={h.time} searchResult={searchResult} time={h.time} temp={h.temp_c} feel={h.feelslike_c} chanceOfRain={h.chance_of_rain}/>)
    };

    return (
        <StyleHeader>
            <input value={input} onChange={inputHandler} type="text"></input>
            <button onClick={searchWether} type="submit">Search</button>
            <h4>Last Update:</h4>
            <LocalTime>
                {(searchResult && locationName) ? (
                    <>  
                        <h3>{searchResult.current.last_updated.split(" ")[0]}</h3>
                        <div className="line"></div>
                        <h3>{searchResult.current.last_updated.split(" ")[1]}</h3>
                    </>
                ): ""}
            </LocalTime>
            <Card searchResult={searchResult} locationName={locationName}/>
            <CardList>
                {(forecast && locationName) && (
                    CardsListInfo()
                )}
            </CardList>
        </StyleHeader>
    )
};

const StyleHeader = styled.div`
    text-align: center;
    input{
        width: 20%;
        font-size: 1.2rem;
        padding: 0.5rem;
        outline: none;
        border: none;
        box-shadow: 0px 0px 8px rgb(0, 0, 0 , 40%);
        color: dimgray;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 600;
    }
    button{
        font-size: 1.2rem;
        padding: 0.5rem;
        border: none;
        background: #f6e4cb;
        color: dimgray;
        font-family: 'Source Sans Pro', sans-serif;
        box-shadow: 0px 0px 7px rgb(0 ,0, 0 , 30%);
        cursor: pointer;
        transition: all 0.5s ease;
    }

    button:hover{
      background: #d8b078;
      color: white;
    }
`;

const LocalTime = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    .line{
        height: 25px;
        width: 4px;
        background: #f6e4cb;
        margin-inline: 0.3rem;
    }
`;

const CardList = styled.div`
    min-height: 25vh;
    padding: 1.5rem;
    display: flex;
    justify-content: space-around;
`;

export default Headr;