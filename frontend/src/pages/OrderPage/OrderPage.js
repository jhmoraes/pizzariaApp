import React, { useContext, useEffect, useCallback } from 'react'
import GlobalStateContext from '../../globalState/GlobalStateContext'
import { MainContainer, OrderPageContainer } from './styled'
import FooterBar from '../../components/FooterBar/FooterBar'
import CardProduct from '../../components/CardProduct/CardProduct'
import Header from '../../components/Header/Header'


const OrderPage = () => {

    const { getOrderStorege, cart, setIsButtonIncluir, setIsFinalizeOrder } = useContext(GlobalStateContext)

    useEffect(() => {

        getOrderStorege()
        setIsButtonIncluir(false)
        setIsFinalizeOrder(true)

    }, [])


    const renderProduct = cart.map((product, index) => {
        return <CardProduct key={index} product={product} />
    })

    return (
        <OrderPageContainer>
            <Header />
            <MainContainer>
                {renderProduct && renderProduct ? <>{renderProduct}</> : <p>Carregando</p>}
            </MainContainer>
            <FooterBar />
        </OrderPageContainer>
    )
}

export default OrderPage