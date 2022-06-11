
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 0px 5%;

    /* .container-galeria{
        display: grid;
        grid-template-columns: repeat(6,1fr);
        grid-auto-rows: 300px;
        padding: 10px;
        grid-gap: 10px;
        margin-top: 20px;
    }

    .item-galeria{
        position: relative;
    }

    .item-galeria .img-galeria{
        width: 100%;
        height: 100%;
    }
    
    .item-galeria .title-galeria{
        position: absolute;
        background-color: rgba(255,255,255,0.8);
        left: 0;
        bottom: 0;
        width: 100%;
        color: #359C8C;
        padding: 10px;
        font-size: 16pt;
        font-family: 'Courgette', cursive;
    }

    .item-galeria .title-galeria .subtitle-galeria {
        font-size: 14px;
    }


    .h-1{
        grid-row: span 1;
    }

    .h-2{
        grid-row: span 2;
    }

    .w-1{
        grid-column: span 1;
    }

    .w-2{
        grid-column: span 2;
    }


    @media(max-width:768px){
        .container-galeria{
            grid-template-columns: repeat(1,1fr);
            grid-auto-rows: 50vh;
        }

        .h-2{
            grid-row: span 1;
        }
        
        .w-2{
            grid-column: span 1;
        }
    } */
`;

export const ButtonDown = styled.button`
    font-size: 4rem;
    color: white;
    width: 100%;
    height: 10%;
    flex-grow: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:0;
    border:0;
    margin:0;
    background: transparent;
`;

export const ButtonDownTwo = styled.button`
    font-size: 4rem;
    color: white;
    width: 20%;
    height: 10%;
    flex-grow: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:0;
    border:0;
    margin:0;
    background: transparent;
`;

export const ButtonWrapper = styled.div`
    flex-grow: 0;
    height: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const SectionWrapper = styled.div`
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const MainContent = styled.div`
    flex-grow: 1;
    width: 100%;
    height: 90%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5%;
    text-shadow: 2px 0px 15px rgba(0, 0, 0, .4);
`;

export const BigTitle = styled.p`
    font-size: 13vw;
    @media(min-width: 657px) {
        font-size: 10vw;
    }
    @media(min-width: 953px) {
        font-size: 9vw;
    }
    @media(min-width: 1100px) {
        margin-top: 3%;
        font-size: 8vw;
    }
    @media(min-width: 1304px) {
        margin-top: 3%;
        font-size: 8vw;
    }
    @media(min-width: 1838px) {
        font-size: 7.5vw;
    }
`;

export const SecondTitle = styled.p`
    font-size: 6vw;
    @media(min-width: 657px) {
        font-size: 5vw;
    }
    @media(min-width: 953px) {
        font-size: 4vw;
    }
    @media(min-width: 1100px) {
        font-size: 3vw;
    }
    @media(min-width: 1304px) {
        margin-top: 3%;
        font-size: 3vw;
    }
    @media(min-width: 1838px) {
        font-size: 2.5vw;
    }
`;

export const FinalText = styled.p`
    font-size: 5vw;
    margin-top: 10%;
    @media(min-width: 657px) {
        margin-top: 2%;
        font-size: 4vw;
    }
    @media(min-width: 953px) {
        font-size: 3vw;
        margin-top: 2%;
    }
    @media(min-width: 1100px) {
        font-size: 2vw;
        margin-top: 2%;
    }
    @media(min-width: 1304px) {
        margin-top: 3%;
        font-size: 2vw;
        margin-top: 2%;
    }
    @media(min-width: 1838px) {
        margin-top: 2%;
        font-size: 1.5vw;
    }
`;

export const PrincipalTitle = styled.p`
    @media(max-width: 656px) {
        font-size: 6vw;
        margin-top: 5%;
    }
    @media(min-width: 657px) {
        font-size: 5vw;
    }
    @media(min-width: 953px) {
        font-size: 4vw;
    }
    @media(min-width: 1100px) {
        font-size: 2vw;
    }
    @media(min-width: 1304px) {
        font-size: 3vw;
    }
    @media(min-width: 1838px) {
        font-size: 2.5vw;
    }
`;

export const SecondTranslateTitle = styled.p`
    font-family: 'Courgette', cursive;
    margin-bottom: 2%;

    @media(max-width: 656px) {
        font-size: 6vw;
        margin-top: 2%;
    }
    @media(min-width: 657px) {
        font-size: 5vw;
    }
    @media(min-width: 953px) {
        font-size: 4vw;
    }
    @media(min-width: 1100px) {
        font-size: 2vw;
    }
    @media(min-width: 1304px) {
        font-size: 3vw;
    }
    @media(min-width: 1838px) {
        font-size: 2.5vw;
    }
`;

export const ImgView = styled.img`
    width: 600px;
    height: 400px;
    flex-grow: 1;

    @media(max-width: 1304px) {
        width: 300px;
        height: 100px;
    }
    
    @media(max-width: 655px) {
        width: 400px;
        height: 200px;
    }

    @media(max-width: 450px) {
        width: 300px;
        height: 100px;
    }

    @media(max-width: 320px) {
        width: 250px;
        height: 50px;
    }
`;



