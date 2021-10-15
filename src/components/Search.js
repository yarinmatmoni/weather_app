import React from 'react';
//styel
import styled from 'styled-components';

function Search({weather}) {
    return (
        <Stylesearch>
            <input type="text"></input>
            <button type="submit">Search</button>
            <div className="localTime">
                <h3>{weather.split(" ")[0]}</h3>
                <div className="line"></div>
                <h3>{weather.split(" ")[1]}</h3>
            </div>
        </Stylesearch>
    )
};

const Stylesearch = styled.div`
    text-align: center;
    input{
        width: 20%;
        font-size: 1.3rem;
        padding: 0.5rem;
        border: none;
        outline: none;
        box-shadow: 0px 0px 15px rgb(0 0 0 / 30%);
        color: dimgray;
    }
    button{
        font-size: 1.3rem;
        padding: 0.5rem;
        border: none;
        background: antiquewhite;
        font-family: 'Source Sans Pro', sans-serif;
        color: dimgray;
    }
    .localTime{
        padding: 1rem 0rem;
    display: flex;
    justify-content: center;

        .line{       
            padding: 0rem 0.1rem;
            height: 25px;
            background: #f6d2a1;
            margin-inline: 5px;
        }
    }

`;


export default Search;
