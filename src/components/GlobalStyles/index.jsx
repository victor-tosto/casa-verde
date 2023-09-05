import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {

        --link-color: #202020;
        --yellow: rgb(255, 203, 71);
        --white: #FFF;
        --secondary-font: 'Elsie Swash Caps', sans-serif;

        font-size: 62.5%;
        font-family: 'Montserrat', sans-serif;

    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyles;
