import React from 'react';
//styel
import styled from 'styled-components';

function Header({localtime}) {

    const date = localtime.split(" ")[0];
    const time = localtime.split(" ")[1];
    console.log(date);

    return (
        <StyleHeader>
            <h1>Weather App</h1>
            <input type="text"></input>
            <button type="submit">Search</button>
            <h3>{date}</h3>
            <h3>{time}</h3>
        </StyleHeader>
    )
};

const StyleHeader = styled.div`
    padding: 2rem 0rem;
    text-align: center;
    h1{
        padding: 2rem 0rem;
        font-size: 5rem;
        font-family: 'Gluten', cursive;
        font-weight: 100;
    }
    input{
        width: 20%;
        font-size: 1.3rem;
        padding: 0.5rem;
        border: none;
        outline: none;
        box-shadow: 0px 0px 15px rgb(0 0 0 / 30%);
    }
    button{
        font-size: 1.3rem;
        padding: 0.5rem;
        border: none;
        background: antiquewhite;
        font-family: 'Source Sans Pro', sans-serif;
    }
`;

export default Header;
