import React, { useEffect, useContext } from 'react'
import { CardOrderContainer } from './styled'
import GlobalStateContext from '../../globalState/GlobalStateContext'

const CardOrder = (props) => {

    const { order } = props
    const { } = useContext(GlobalStateContext)

    let newOrder = { pizza: '', valor: 0 }
    let arrayOrder = []

    for (let i = 0; i < order.length; i++) {

        newOrder = {
            pizza: `${newOrder.pizza} ${order[i].pizza} `,
            valor: newOrder.valor + order[i].preco,
            quantity: order.length
        }
    }

    arrayOrder.push(newOrder)

    const oneOrder = arrayOrder.map((item, index) => {

        return <CardOrderContainer key={index}>
            <p >{item.pizza}</p>
            <p >Itens: {item.quantity}</p>
            <p >Total: R$ {item.valor}</p>
        </CardOrderContainer>

    })





    return (
        <>

            {oneOrder && oneOrder ? oneOrder : <></>}

        </>

    )
}

export default CardOrder