import React from 'react';
//Style 
import styled from 'styled-components';

function Card({searchResult,locationName}) {
    return (
        <>
            {locationName ? (
                <StyleCard>
                    <NameLocation>{searchResult.location.name}</NameLocation>
                    <h3>{`${searchResult.location.country}, ${searchResult.location.region}`}</h3>
                    <Details>
                        <Info>
                            <h3 className="title">Current:</h3>
                            <h3 className="answer">{`${searchResult.current.temp_c} C`}</h3>
                            <h3 className="title">Feels Like:</h3>
                            <h3 className="answer">{`${searchResult.current.feelslike_c} C`}</h3>
                        </Info>
                        <Info>
                            <h3 className="title">Wind:</h3>
                            <h3 className="answer">{`${searchResult.current.wind_kph} KPH`}</h3>
                            <h3 className="title">Conditions:</h3>
                            <h3 className="answer">{searchResult.current.condition.text}</h3>
                        </Info>    
                        <Info>
                            <img src={searchResult.current.condition.icon} alt={searchResult.current.condition.text}></img>
                        </Info>
                    </Details>
                </StyleCard>
            ): ""}
        </>
    )
};

const StyleCard = styled.div`
    background: #ffeacf8c;
    margin-top: 2rem;
    width: 40rem;
    margin-inline: auto;
    border-radius: 1rem;
    box-shadow: 0px 0px 10px rgba(0 0 0 / 25%);
`;

const NameLocation = styled.div`
    text-align: center;
    color: dimgray;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.8rem;
    padding-bottom: 0.2rem;
    padding-top: 0.3rem;
    font-weight: bold;
`;

const Details = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0rem 1rem 0rem;

    .title{
        font-size: 1.6rem;
        font-weight: 100;
    }

    .answer{
        padding-bottom: 1rem;
        font-size: 1.5rem;
        font-weight: 600;
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.3rem;

    img{
        height: 8rem;
        width: 100%;
    }
`;

export default Card;
