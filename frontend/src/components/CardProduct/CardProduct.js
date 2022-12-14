import React, { useEffect, useContext } from 'react'
import { CardProductContainer, ButtonIncluir, ButtonRemover, Controls } from './styled'
import GlobalStateContext from '../../globalState/GlobalStateContext'

const CardProduct = (props) => {

    const { product } = props

    const { savedCart, isButtonIncluir, removeItems, addItems } = useContext(GlobalStateContext)


    return (
        <CardProductContainer>
            <p>{product.pizza}</p>
            <p> {isButtonIncluir ? "" : "Total:"} R$ {isButtonIncluir ? product.preco : product.total}</p>
            <p>Ingedientes: {product.ingredientes}</p>
            {isButtonIncluir ?
                <ButtonIncluir>
                    <button onClick={() => savedCart(product.id)}>Incluir</button>
                </ButtonIncluir>
                :
                <ButtonRemover>
                    <p>{product.quantity}</p>
                    <Controls>
                        <button onClick={()=>addItems(product.pizza)}>+</button>
                        <button onClick={()=>removeItems(product.pizza)}>-</button>
                    </Controls>
                </ButtonRemover>}
        </CardProductContainer>
    )
}

export default CardProduct