import styled from "styled-components"


export const CardProductContainer = styled.div`
    min-height: 15vh;
    border: 1px solid lightgray;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr, 1fr, 3fr;
    align-items: center;
    justify-items: self-start;
    margin: 1rem 1rem;
    

    p{
        grid-column: 1/5;
        padding-left: 2rem;
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

    button{
        width: 15vw;
        background-color: #FFC72C;
        color: #1E4B2E;
        border-radius: 5px;
        border: none;
        cursor: pointer;
       
    }

`

export const ButtonRemover = styled.div`
    width: 25vw;
    height: 10vh;
    grid-row: 1/4;
    grid-column: 5/7;
    display: flex;
    justify-content: space-around;
    align-items: center;

    p{
        font-size: 1.2rem;
        background-color: #F8F8FF;
        //background-color: pink;
        height: 2vh;
        width: 3vh;
        text-align: center;
        margin: 0;
        padding: 0;
    }
   
`

export const Controls = styled.div`
    height: 10vh;
    //border: 1px solid #F8F8FF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    button{
        width: 8vw;
        height: 4vh;
        background-color: #8B0000;
        color: #ffff;
        font-size: 1.5rem;
        border-radius: 5px;
        border: none;
        
    }

`
