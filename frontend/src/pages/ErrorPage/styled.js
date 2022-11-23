import styled from "styled-components"


export const ErrorPageContainer = styled.div`
    height: 100vh;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ImgError = styled.div`
    height: 90%;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        height: 50%;
    }
`