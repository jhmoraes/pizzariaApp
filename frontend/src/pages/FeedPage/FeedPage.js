import React, { useContext, useEffect } from 'react'
import FooterBar from '../../components/FooterBar/FooterBar'
import {FeedContainer, MainContainer} from './styled'
import GlobalStateContext from '../../globalState/GlobalStateContext'
import CardProduct from '../../components/CardProduct/CardProduct'
import Header from '../../components/Header/Header'

const FeedPage = () => {

    const { setIsButtonIncluir,  allProducts } = useContext(GlobalStateContext)

    useEffect(() => {

        setIsButtonIncluir(true)
        allProducts()

    }, [])

    const { allProductItem } = useContext(GlobalStateContext)
    const renderProduct = allProductItem.map((product, index) => {
        return <CardProduct key={index} product={product} />
    })

    return (
        <FeedContainer>
            <Header/>
            <MainContainer>

                {renderProduct && renderProduct ? <>{renderProduct}</> : <p>Carregando</p>}

            </MainContainer>
            <FooterBar />
        </FeedContainer>

    )
}

export default FeedPage