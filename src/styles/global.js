import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --principal: #66E8D5;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--principal);
        -webkit-font-smoothing: antialiased;
        color: white;
    }

    body, input, text-area, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
    
    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .fp-watermark {
        visibility: hidden !important;
    }
`;