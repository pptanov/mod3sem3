import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --navTopMargin: 1%;
    }
    body{
        background-color: var(--theme);
    }
    html[data-theme=light]{
        --theme: white;
        --textTheme: black;
    }
    html[data-theme=dark]{
        --theme: #181818;
        --textTheme: white;
    }
`;

export default GlobalStyle;
