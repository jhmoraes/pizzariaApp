import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`

export const HomeMenu = styled.ul`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;

  img{
    rotate: calc(-90deg);
    margin-right: 1rem;
  }
  
  p{
    color: brown;
  }

  li{
    list-style-type: none ;    
    font-size: 1.2rem;
    font-family: 'Helvetica Neue';
    width: 55%;
    height: 18%;
    background-color: #FFC72C;
    border-radius: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 1rem;
    text-transform: uppercase;
    font-weight: 700;
  }
`

