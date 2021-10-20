import React from 'react';
//Style 
import styled from 'styled-components';
import {motion} from "framer-motion";
import { fade } from '../animation';

function Card({searchResult,locationName}) {
    return (
        <>
            {locationName ? (
                <StyleCard variants={fade} initial="hidden" animate="show">
                    <NameLocation>{searchResult.location.name}</NameLocation>
                    <motion.h3>{`${searchResult.location.country}, ${searchResult.location.region}`}</motion.h3>
                    <Details>
                        <Info>
                            <motion.h3 className="title">Current:</motion.h3>
                            <motion.h3 className="answer">{`${searchResult.current.temp_c} C`}</motion.h3>
                            <motion.h3 className="title">Feels Like:</motion.h3>
                            <motion.h3 className="answer">{`${searchResult.current.feelslike_c} C`}</motion.h3>
                        </Info>
                        <Info>
                            <motion.h3 className="title">Wind:</motion.h3>
                            <motion.h3 className="answer">{`${searchResult.current.wind_kph} KPH`}</motion.h3>
                            <motion.h3 className="title">Conditions:</motion.h3>
                            <motion.h3 className="answer">{searchResult.current.condition.text}</motion.h3>
                        </Info>    
                        <Info>
                            <motion.img src={searchResult.current.condition.icon} alt={searchResult.current.condition.text}></motion.img>
                        </Info>
                    </Details>
                </StyleCard>
            ): ""}
        </>
    )
};

const StyleCard = styled(motion.div)`
    background: #ffeacf8c;
    margin-top: 0.5rem;
    width: 40rem;
    margin-inline: auto;
    border-radius: 1rem;
    box-shadow: 0px 0px 10px rgba(0 0 0 / 25%);
`;

const NameLocation = styled(motion.div)`
    text-align: center;
    color: dimgray;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.8rem;
    padding-bottom: 0.2rem;
    padding-top: 0.3rem;
    font-weight: bold;
`;

const Details = styled(motion.div)`
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

const Info = styled(motion.div)`
    display: flex;
    flex-direction: column;
    row-gap: 0.3rem;

    img{
        height: 8rem;
        width: 100%;
    }
`;

export default Card;
