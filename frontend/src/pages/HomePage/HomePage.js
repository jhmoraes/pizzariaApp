import React, { useContext, useEffect } from 'react'
import GlobalStateContext from '../../globalState/GlobalStateContext'
import FooterBar from '../../components/FooterBar/FooterBar'
import Header from '../../components/Header/Header'
import { HomeContainer, HomeMenu} from './styled'
import {goToFeedPage, goToCreatePizza, goToOrderHistoryPage} from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import Icon from "../../img/icons/favicon-32x32.png"


const HomePage = () => {

    const navigate = useNavigate()

    const { isFinalizeOrder, setIsFinalizeOrder, setMsgConfirm} = useContext(GlobalStateContext)

    useEffect(() => {

        setIsFinalizeOrder(false)
        setMsgConfirm('')

    }, [])

    console.log(isFinalizeOrder)

    return (
        <HomeContainer>
            <Header/>
            <HomeMenu>
                <li onClick={()=>goToCreatePizza(navigate)}><img src={Icon}/><p>Nova Pizza</p></li>
                <li onClick={()=>goToOrderHistoryPage(navigate)}><img src={Icon}/><p>Meus Pedidos</p></li>
                <li onClick={()=>goToFeedPage(navigate)}><img src={Icon}/><p>Pedir Pizza</p></li> 
            </HomeMenu>
            <FooterBar />
        </HomeContainer>

    )
}

export default HomePage