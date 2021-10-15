import React,{useState} from 'react';
import {currentDate , currentTime} from "../dateAndTime";
//Style
import styled from 'styled-components';

function Headr() {

    const [time,setTime] = useState(currentTime);
    const [date,setDate] = useState(currentDate);

    return (
        <StyleHeader>
            <input type="text"></input>
            <button type="submit">Search</button>
            <LocalTime>
                <h3>{date}</h3>
                <div className="line"></div>
                <h3>{time}</h3>
            </LocalTime>
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
        box-shadow: 0px 0px 8px rgb(0 0 0 / 40%);
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
    }
`;

const LocalTime = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    .line{
        height: 25px;
        width: 4px;
        background: #f6e4cb;
        margin-inline: 0.3rem;
    }
`;

export default Headr;
