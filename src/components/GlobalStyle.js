import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h3{
        font-family: 'Source Sans Pro', sans-serif;
        padding: 1rem 0rem;
    }
`;

export default GlobalStyle;