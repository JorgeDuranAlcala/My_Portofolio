import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body {
    padding: 0;
    margin: 0;
    }

    * {
    box-sizing: border-box;
    font-family: 'Poppins';
    }

    a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    }

    button {
        outline: none;
        border: none;
        background: transparent;
        cursor: pointer;
    }

`;
