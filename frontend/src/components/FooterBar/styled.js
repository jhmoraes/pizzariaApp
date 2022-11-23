import styled from "styled-components";




export const FooterBarContainer = styled.div`
    background-color: #1E4B2E;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 70%;
`
export const IconHomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 50%;
    cursor: pointer;

    img{
        width: 15%;
    }

    p{
        color: white;
        font-size: 0.8rem;
    }
`

export const IconCarrinhoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;    

    img{
        width: 15%;
    }

    p{
        color: white;
        font-size: 0.8rem;
    }
    
`

export const FinalizeOrderContainer = styled.button`
   
    min-width: 50%;
    min-height: 65%;
    font-size: 1rem;
    background-color: #FFC72C;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    
`