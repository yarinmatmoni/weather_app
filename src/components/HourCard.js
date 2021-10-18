import React from 'react';
//Style
import styled from 'styled-components';

function HourCard({time,temp,feel,chanceOfRain,searchResult}) {
    return (
        <StyleCard>
            <div>
                <h4>{time.split(" ")[1]}</h4>
                <h5>{`Temperature: ${temp} C`}</h5>
                <h5>{`Feels Like: ${feel} C`}</h5>
                <h5>{`Chance Of Rain: ${chanceOfRain}%`}</h5>
            </div>
            <div className="icon">
                {/* {searchResult && (
                <img src={searchResult.forecast.forecastday[0].hour[time.split(" ")[1].split(":")[0]].condition.icon} alt=""></img>
                )} */}
            </div>
        </StyleCard>
    )
};

const StyleCard = styled.div`
    background: #fff3e5;
    border-radius: 1rem;
    padding: 0.5rem 3rem;
    width: 15rem;
    box-shadow: 0px 0px 10px rgb(0 0 0 / 25%);
    h4{
        font-size: 1.8rem;
        padding-bottom: 0.5rem;
    }
    h5{
        padding: 0.2rem;
        font-size: 1rem;
        font-weight: 300;
        font-family: 'Source Sans Pro', sans-serif;
    }
`;

export default HourCard;
