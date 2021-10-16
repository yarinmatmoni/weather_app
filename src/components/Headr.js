import React,{useEffect, useState} from 'react';
import {currentDate , currentTime} from "../dateAndTime";
import Card from './Card';
//Style
import styled from 'styled-components';
//Api
import axios from "axios";
import {currentData} from "../api";

function Headr() {

    const time = currentTime;
    const date = currentDate;
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
        if(searchResult)
            console.log(searchResult.current.last_updated);
    },[locationName]);
    
    return (
        <StyleHeader>
            <input value={input} onChange={inputHandler} type="text"></input>
            <button onClick={searchWether} type="submit">Search</button>
            <h4>Last Update:</h4>
            <LocalTime>
                {searchResult && (
                    <>  
                        <h3>{(locationName === null) ? date : searchResult.current.last_updated.split(" ")[0]}</h3>
                        <div className="line"></div>
                        <h3>{(locationName === null) ? time : searchResult.current.last_updated.split(" ")[1]}</h3>
                    </>
                )}
            </LocalTime>
            <Card searchResult={searchResult} locationName={locationName}/>
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

export default Headr;
