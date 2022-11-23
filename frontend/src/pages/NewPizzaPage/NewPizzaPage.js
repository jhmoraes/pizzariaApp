import React, { useContext, useEffect } from 'react'
import { NewPizzaContainer, NewProductContainer, ButtonRegister, MessageUser } from './styled'
import GlobalStateContext from '../../globalState/GlobalStateContext'
import Header from '../../components/Header/Header'
import FooterBar from '../../components/FooterBar/FooterBar'


const NewPizzaPage = () => {

    const { inputPizza, setInputPizza, setInputPreco, inputPreco, setInputIngrediente, inputIngrediente, postNewProduct, msgUser } = useContext(GlobalStateContext)

    return (
        <NewPizzaContainer>
            <Header />
            <NewProductContainer>
                <input placeholder='PIZZA' value={inputPizza} onChange={(e) => { setInputPizza(e.target.value) }}></input>
                <input placeholder='PREÇO' value={inputPreco} onChange={(e) => { setInputPreco(e.target.value) }}></input>
                <textarea placeholder='INGREDIENTES' value={inputIngrediente} onChange={(e) => { setInputIngrediente(e.target.value) }} ></textarea>
                <ButtonRegister onClick={postNewProduct}>CADASTRAR</ButtonRegister>
                <MessageUser>{msgUser ? <p>{msgUser}</p> : <></>}</MessageUser>
            </NewProductContainer>
            <FooterBar />
        </NewPizzaContainer>
    )
}

export default NewPizzaPage