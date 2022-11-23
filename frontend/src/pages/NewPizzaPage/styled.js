import styled from "styled-components";


export const NewPizzaContainer = styled.div`
    height: 100vh;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    input{
        margin-bottom: 1rem;
        height: 2.2rem;
    }

    textarea{
        height: 4rem;
    }

    input, textarea {
        border: 1px solid lightgray;
        border-radius: 5px;
        padding: 0.5rem;
        font-size: 1.1rem;
        outline: none;
        color: gray;
    }
`

export const NewProductContainer = styled.div`
    height: 100%;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    font-size: 1.1.rem;
`

export const ButtonRegister = styled.button`
    width: 100%;
    height: 7%;
    font-size: 1.1rem;
    background-color: #FFC72C;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 2rem;
`
export const MessageUser = styled.div`
    text-align: center;
    font-size: 1.2rem;
    color: lightgray;
    margin-top: 4rem;
    font-weight: bold;
`