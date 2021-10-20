import React from 'react';
//Style
import styled from 'styled-components';
//Images
import lowTemp from "../images/low-temperature.png";
import highTemp from "../images/high-temperature.png";
import avgTemp from "../images/celsius.png";
import sunrise from "../images/sunrise.png";
import sunset from "../images/sunset.png";
import humidity from "../images/humidity.png";

function DailyForecast({searchResult}) {
    const day = searchResult.forecast.forecastday[0].day;
    const asrtro = searchResult.forecast.forecastday[0].astro;
    return (
        <StyleDailyForecast>
            <h2>Daily Forecast</h2>
            {searchResult && (
                <>
                    <StyleDatInfo>
                        <div className="temp">
                            <div className="info">
                                <h4><StyleImage src={lowTemp} alt="lowTemp" /></h4>
                                <h5>{`${day.mintemp_c} C`} (MIN)</h5>    
                            </div>
                            <div className="info">
                                <h4><StyleImage src={highTemp} alt="lowTemp" /></h4>
                                <h5>{`${day.maxtemp_c} C`} (MAX)</h5>    
                            </div>
                            <div className="info">
                                <h4><StyleImage src={avgTemp} alt="lowTemp" /></h4>
                                <h5>{`${day.avgtemp_c} C`} (AVG)</h5>   
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="sunAndhumidity">
                            <div className="info">
                                <h4><StyleImage src={sunrise} alt="lowTemp" /></h4>
                                <h5>{asrtro.sunrise}</h5>
                            </div>
                            <div className="info">
                                <h4><StyleImage src={sunset} alt="lowTemp" /></h4>
                                <h5>{asrtro.sunset}</h5>
                            </div>
                            <div className="info">
                                <h4><StyleImage src={humidity} alt="lowTemp" /></h4>
                                <h5>{day.avghumidity} (AVG)</h5>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="icon">
                            <img className="iconImage" src={day.condition.icon} alt=""/>
                            <h3>{day.condition.text}</h3>
                        </div>
                    </StyleDatInfo>
                </>
            )}
        </StyleDailyForecast>
    )
};

const StyleDailyForecast = styled.div`
    min-height: 100vh;
    background: #f0f8ff6e;
    margin-top: 5rem;

    h2{
        font-size: 3rem;
        text-align: center;
        color: dimgray;
        font-weight: bold;
        padding: 5rem 0rem 1.5rem 0rem;
        font-family: 'Source Sans Pro',sans-serif;
        color: #696969bf;
    }
`;

const StyleDatInfo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 7rem 5rem;
    h5{
        font-size: 1.8rem;
        font-family: 'Source Sans Pro',sans-serif;
        color: #696969bf;
        }
    h4{
        font-size: 1rem;
        font-family: 'Source Sans Pro',sans-serif;
        color: #696969bf;
    }
    h3{
        color: #696969bf;
        font-family: 'Source Sans Pro',sans-serif;
        font-size: 2rem;
    }
    .iconImage{
        height: 9rem;
        width: 9rem;
    }

    .info{
        display: flex;
        align-items: center;
        height: 7rem;
        width: 15rem;
        justify-content: space-evenly;
    }

    .line{
        height: 20rem;
        width: 0.3rem;
        background-color: #696969cf;
    }
`;

const StyleImage = styled.img`
    height: 5rem;
    width: 5rem;
    filter: opacity(0.5) drop-shadow(0 0 0 antiquewhite);
`;

export default DailyForecast;
