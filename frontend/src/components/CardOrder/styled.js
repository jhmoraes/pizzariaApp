import styled from "styled-components"


export const CardOrderContainer = styled.div`
    min-height: 15vh;
    border: 1px solid lightgray;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr, 1fr, 3fr;
    align-items: center;
    justify-items: start;
    margin: 1rem 1rem;

    p{
        grid-column: 1/5;
        padding-left: 2rem;
    }

    p:nth-child(3){
        //max-width: 10vw;
        //background-color: pink;
    }

    *{
        margin: 0;
        padding: 0;
    }
`

export const ButtonIncluir = styled.div`
    width: 25vw;
    height: 4vh;
    grid-row: 1/4;
    grid-column: 5/7;
    display: flex;
    justify-content: end;
    align-content: center;


   // background-color: aqua;
    button{
        width: 15vw;
        background-color: #FFC72C;
        color: #1E4B2E;
        border-radius: 5px;
        border: none;
       
    }

`
