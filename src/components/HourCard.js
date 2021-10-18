import React from 'react';

function HourCard({time,temp,feel,chanceOfRain}) {
    return (
        <div>
            <h4>{time.split(" ")[1]}</h4>
            <h5>{`${temp} C`}</h5>
            <h5>{`${feel} C`}</h5>
            <h5>{`${chanceOfRain}%`}</h5>
        </div>
    )
};

export default HourCard;
