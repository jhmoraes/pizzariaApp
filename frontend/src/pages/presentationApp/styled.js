import styled from "styled-components"

export const PresentationPageContainer = styled.div`
   background-color: #8B0000;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;

   @keyframes fadeIn{
    0% {opacity: 1};
    50% {background-color: #F00000};
    100% {opacity: 1};
   }

   animation: fadeIn 2s linear infinite;
`

export const LogoContainer = styled.img`
    height: 30%;
`