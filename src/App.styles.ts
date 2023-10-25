import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/sarah-background.jpg';

export const GlobalStyle = createGlobalStyle`
    
    html {
        height: 100%;
    }
    
    body{
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }

`

export const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    > p { 
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2.2rem;
        margin: 0;
    }

    h1 {
        font-family: Fascinate Inline, sans-serif;
        background-image: linear-gradient(180deg, #F3F4FB, #8bc1b6);
        backgroun-size = 100%;
        background-clip = text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: trasparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 4.5rem;
        text-align: center;
        margin: 20px;
    }

    .start, .next {
        color: #E3E6ED;
        cursor: pointer;
        background: linear-gradient(180deg, #E8F4F4, #23481F);
        border: 2px solid #8FA561;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;
    }
`

