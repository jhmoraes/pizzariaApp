import React from 'react'
import { HeaderContainer, CentralItem } from './styled'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToOrderPage } from '../../routes/Coordinator'
import Logo from '../../img/logo.png'


const Header = () => {

    const navigate = useNavigate()

    
    return (
        <HeaderContainer>

            <CentralItem src={Logo} onClick={() => goToHomePage(navigate)}/>

        </HeaderContainer>
    )
}

export default Header