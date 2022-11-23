import React, { useEffect, useContext } from 'react'
import GlobalStateContext from '../../globalState/GlobalStateContext'
import { FooterBarContainer, IconCarrinhoContainer, Pedido, IconsContainer, IconHomeContainer, FinalizeOrderContainer } from './styled'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToOrderPage } from '../../routes/Coordinator'
import IconHome from '../../img/icons/home.png'
import IconCart from '../../img/icons/carrinho.png'


const FooterBar = () => {

    const navigate = useNavigate()

    const { isFinalizeOrder } = useContext(GlobalStateContext)

    //console.log("isFinalizeOrder", isFinalizeOrder)
    
    return (
        <FooterBarContainer>

            <IconsContainer>

                <IconHomeContainer onClick={() => goToHomePage(navigate)}>
                    <img src={IconHome} />
                    <p>Home</p>
                </IconHomeContainer >

                {isFinalizeOrder ?
                    <FinalizeOrderContainer>
                        <p>Finalizar Pedido</p>
                    </FinalizeOrderContainer>
                    :
                    <IconCarrinhoContainer onClick={() => goToOrderPage(navigate)}>
                        <img src={IconCart} />
                        <p>Carrinho</p>
                    </IconCarrinhoContainer>

                }
            </IconsContainer>

        </FooterBarContainer>
    )
}

export default FooterBar

