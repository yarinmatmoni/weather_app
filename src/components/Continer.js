import React,{useEffect, useState} from 'react';
import Card from './Card';
import HourCard from './HourCard';
import DailyForecast from './DailyForecast';
//Style and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade } from '../animation';
import { useScroll } from './useScroll';
//Api
import axios from "axios";
import {currentData} from "../api";

function Continer() {

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

    const enterSubmitHandler = (e) => {
        if(e.key === "Enter")
            searchWether();
    };

    useEffect(()=>{
        axios.get(currentData(locationName)).then((data) => {setSearchResult(data.data)});
    },[locationName]);
    
    const {forecast}  = searchResult;
    const result = []

    const CardsListInfo = () => {
        const stateDay1 = [forecast.forecastday[0]];
        const stateDay2 = [forecast.forecastday[1]];
        const currentHour = searchResult.current.last_updated.split(" ")[1].split(":")[0];

        stateDay1[0].hour.map((h)=> {
            if(h.time.split(" ")[1].split(":")[0] > currentHour)
                result.push(h);
        });

        if(result.length < 5){
            stateDay2[0].hour.map((h)=>{
                result.push(h);
            });
        }

        return(result.slice(0,5));
    };

    const [isClicked,setIsCliked] = useState(false);

    const [element,controls] = useScroll();

    return (
        <StyleHeader>
            <input value={input} placeholder="Enter Location For Search..." onKeyPress={enterSubmitHandler}  onChange={inputHandler} type="text"></input>
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
                    CardsListInfo().map((card)=> <HourCard 
                    setIsCliked={setIsCliked}
                    isClicked={isClicked}
                    key={card.time} 
                    searchResult={searchResult} 
                    time={card.time} 
                    temp={card.temp_c} 
                    feel={card.feelslike_c} 
                    chanceOfRain={card.chance_of_rain}
                    result={result}
                    />)
                )}
            </CardList>
            {locationName && (
                <motion.div variants={fade} animate={controls} initial="hidden" ref={element}>
                    <DailyForecast searchResult={searchResult}/>
                </motion.div>
            )}
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

    input::placeholder {
        color: #c6c3c3;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 600;
        font-size: 1rem;
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

export default Continer;