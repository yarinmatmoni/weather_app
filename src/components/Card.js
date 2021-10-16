import React from 'react';
//Style 
import styled from 'styled-components';

function Card({searchResult,locationName}) {
    return (
        <>
            {locationName ? (
                <StyleCard>
                    <NameLocation>{searchResult.location.country}</NameLocation>
                    <p>{searchResult.location.region}</p>
                    <p>blbblblblbl</p>
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
    padding-bottom: 4rem;
    padding-top: 0.3rem;
`;

export default Card;
