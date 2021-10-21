import { motion } from 'framer-motion';
import React, { useState } from 'react';
//Style
import styled from 'styled-components';
import {pop} from "../animation";

function HourCard({time,temp,feel,chanceOfRain,searchResult,result}) {
    const getIcon = () => {
       return result.slice(0,5).filter((d)=> d.time === time)
    };

    const [loaded,setLoaded] = useState(false);

    return (
        <StyleCard variants={pop} initial="hidden" show={loaded ? "" : "show" }>
            <motion.div>
                <motion.h4>{time.split(" ")[1]}</motion.h4>
                <motion.h5>{`Temperature: ${temp} C`}</motion.h5>
                <motion.h5>{`Feels Like: ${feel} C`}</motion.h5>
                <motion.h5>{`Chance Of Rain: ${chanceOfRain}%`}</motion.h5>
            </motion.div>
            <motion.div className="icon">
                {searchResult && (
                    <motion.img src={getIcon()[0].condition.icon} alt=""/>
                )}
            </motion.div>
        </StyleCard>
    )
};

const StyleCard = styled(motion.div)`
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
