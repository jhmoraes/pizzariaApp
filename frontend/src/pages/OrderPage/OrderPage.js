import React, { useContext, useEffect, useCallback } from 'react'
import GlobalStateContext from '../../globalState/GlobalStateContext'
import { MainContainer, OrderPageContainer } from './styled'
import FooterBar from '../../components/FooterBar/FooterBar'
import CardProduct from '../../components/CardProduct/CardProduct'
import Header from '../../components/Header/Header'


const OrderPage = () => {

    const { cart, setIsButtonIncluir, setIsFinalizeOrder, saveToCartState, msgConfirm } = useContext(GlobalStateContext)

    useEffect(() => {

        saveToCartState()
        setIsButtonIncluir(false)
        setIsFinalizeOrder(true)

    }, [])

    return (
        <OrderPageContainer>
            <Header />
            <MainContainer>
                {msgConfirm ? <span>{msgConfirm}</span> : cart === null || cart.length === 0 ? <span>Nenhum item no carrinho!</span> : cart.map((product, index) => { return <CardProduct key={index} product={product} /> })}
            </MainContainer>
            <FooterBar />
        </OrderPageContainer>
    )
}

export default OrderPage