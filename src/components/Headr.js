import React,{useEffect, useState} from 'react';
import Card from './Card';
//Style and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade} from '../animation';
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
        setIsCliked(true);
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
        return array.slice(0,5).map((h)=> <HourCard setIsCliked={setIsCliked} isClicked={isClicked} key={h.time} array={array} searchResult={searchResult} time={h.time} temp={h.temp_c} feel={h.feelslike_c} chanceOfRain={h.chance_of_rain}/>)
    };

    const [isClicked,setIsCliked] = useState(false);

    return (
        <StyleHeader>
            <input value={input} onChange={inputHandler} type="text"></input>
            <button onClick={searchWether} type="submit">Search</button>
            <motion.h4  variants={fade} initial="hidden" animate={isClicked ? "show" : "hidden"}>Last Update:</motion.h4>
            <LocalTime variants={fade} initial="hidden" animate={isClicked ? "show" : "hidden"}>
                {(searchResult && locationName) ? (
                    <>  
                        <motion.h3>{searchResult.current.last_updated.split(" ")[0]}</motion.h3>
                        <motion.div className="line"></motion.div>
                        <motion.h3>{searchResult.current.last_updated.split(" ")[1]}</motion.h3>
                    </>
                ): ""}
            </LocalTime>
            <Card variants={fade} initial="hidden" animate="show" searchResult={searchResult} locationName={locationName}/>
            <CardList>
                {(forecast && locationName) && (
                    CardsListInfo()
                )}
            </CardList>
        </StyleHeader>
    )
};

const StyleHeader = styled(motion.div)`
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

const LocalTime = styled(motion.div)`
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

const CardList = styled(motion.div)`
    min-height: 25vh;
    padding: 1.5rem;
    display: flex;
    justify-content: space-around;
`;

export default Headr;