import React, { useContext, useEffect } from 'react'
import GlobalStateContext from '../../globalState/GlobalStateContext'
import FooterBar from '../../components/FooterBar/FooterBar'
import Header from '../../components/Header/Header'
import { OrderHistoryContainer, MainContainer, OrderText } from './styled'
import CardOrder from '../../components/CardOrder/CardOrder'


const OrderHistoryPage = () => {

    const { getAllOrders, allOrder, orderListOrganization, viewAllOrder } = useContext(GlobalStateContext)

    useEffect(() => {
        getAllOrders()
    }, [])

    useEffect(() => {
        orderListOrganization()
    }, [allOrder])

    const renderAllOrder = viewAllOrder.map((order, index) => {
        return <CardOrder key={index} order={order.id_product} />
    })

    return (
        <OrderHistoryContainer>
            <Header />
            <MainContainer>
                <OrderText>Pedidos Realizados</OrderText>
                {renderAllOrder && renderAllOrder ? <>{renderAllOrder}</> : <p>Carregando</p>}
            </MainContainer>
            <FooterBar />
        </OrderHistoryContainer>

    )
}

export default OrderHistoryPage