import React from 'react';
//Style
import styled from 'styled-components';
//Images
import highTemp from '../images/high-temperature.png';
import lowTemp from "../images/low-temperature.png";
import avgTemp from "../images/celsius.png";
import sunrise from "../images/sunrise.png";
import sunset from "../images/sunset.png";
import humidity from "../images/humidity.png";

function DailyForecast({searchResult}) {
    return (
        <StyleDay>
            <Title>Daily Forecast</Title>
            <div className="cards-continer">
                <div className="row">
                    <div className="card">
                        <h3>Max Temperature:</h3>
                        <h3>{`${searchResult.forecast.forecastday[0].day.maxtemp_c} C`}</h3>
                        <img src={highTemp} alt=""/>
                    </div>
                    <div className="card">
                        <h3>Minimum Temperature:</h3>
                        <h3>{`${searchResult.forecast.forecastday[0].day.mintemp_c} C`}</h3>
                        <img src={lowTemp} alt=""/>
                    </div>
                    <div className="card">
                        <h3>Avg Temperature:</h3>
                        <h3>{`${searchResult.forecast.forecastday[0].day.avgtemp_c} C`}</h3>
                        <img src={avgTemp} alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="card">
                        <h3>Sunrise:</h3>
                        <h3>{searchResult.forecast.forecastday[0].astro.sunrise}</h3>
                        <img src={sunrise} alt=""/>
                    </div>
                    <div className="card">
                        <h3>Sunset:</h3>
                        <h3>{searchResult.forecast.forecastday[0].astro.sunset}</h3>
                        <img src={sunset} alt=""/>
                    </div>
                    <div className="card">
                        <h3>Humidity:</h3>
                        <h3>{searchResult.forecast.forecastday[0].day.avghumidity}</h3>
                        <img src={humidity} alt=""/>
                    </div>
                </div>
                <div className="row" id="icon">
                    <div className="card">
                        <h3>{searchResult.forecast.forecastday[0].day.condition.text}</h3>
                        <img src={searchResult.forecast.forecastday[0].day.condition.icon} alt=""/>
                    </div>
                </div>
            </div>
        </StyleDay>
    )
};

const StyleDay = styled.div`
    min-height: 70vh;
    .cards-continer{
        display: flex;
        justify-content: space-evenly;
        padding: 2rem 4rem;
        align-items: center;
    }
    .card{
        background: #fff3e5;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        box-shadow: 0px 0px 15px rgb(0 0 0 / 20%);
        margin: 0.6rem 0;
        min-width: 20rem;
        min-height: 10rem;
        h3{
            padding: 0.5rem;
            font-size: 1.3rem;
        }
        img{
            height: 4rem;
            width: 4rem;
        }
    }
    #icon{
        img{
            height: 9rem;
            width: 9rem;
        }
    }
`;

const Title = styled.h2`
    font-size: 3.5rem;
    color: dimgray;
    font-family: 'Source Sans Pro',sans-serif;
    padding: 2rem 0rem 2rem 0rem;
`;

export default DailyForecast;
