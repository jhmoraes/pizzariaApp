import React, { useEffect } from "react"
import { PresentationPageContainer, LogoContainer } from './styled'
import Logo from '../../img/logo.png'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../../routes/Coordinator'



const PresentationPage = () => {

    const navigate = useNavigate()

    useEffect(() => {

        setTimeout(() => {
            goToHomePage(navigate)
        }, "4000")

    }, [])

    return (
        <PresentationPageContainer>
            <LogoContainer src={Logo} />
        </PresentationPageContainer>

    )
}

export default PresentationPage