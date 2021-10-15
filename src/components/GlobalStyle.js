import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1{
        font-size: 5rem;
        font-family: 'Gluten', cursive;
        font-weight: 100;
        padding: 5rem 0rem 2rem 0rem;
        text-align: center;
        color: dimgray;
    }

    h3{
        font-family: 'Source Sans Pro', sans-serif;
        text-align: center;
        color: dimgray;
    }
`;

export default GlobalStyle;