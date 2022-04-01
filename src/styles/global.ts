import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        // dark theme
        --dark-gray: #363940;
        --not-so-dark-gray: #44474E;

        // base colors
        --red: #FF817E;
        --green: #3FB73D;
        --blue: #515AAB;
        --config-gray: #C4C4C4;
        --white: #FFFFFF;

        // light theme
        --light-gray: #E5E5E5;
        --very-light-gray: #F6F6F6;
        --dark-font: #363940;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // 1rem == 1 font-size == 16px

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        // background: var(the background color)
        -webkit-font-smoothing: antialised;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`