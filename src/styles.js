import { createGlobalStyle } from "styled-components";

export const colors = {
    darkBlue : '#141628',
    cardBlue : '#1b1e32',
    lightBlue: '#2b304f',
    lightRed: '#fd4370'
}

const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        background-color:${colors.darkBlue}
    }

    .container {
        max-width: 1366px;
        width:100%;
        margin:0 auto;
    }
`

export default GlobalStyle