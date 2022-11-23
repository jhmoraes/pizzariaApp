import React from 'react'
import Header from '../../components/Header/Header'
import { ErrorPageContainer, ImgError } from './styled'
//import Error404 from '../../img/404Pizza.webp'
//import Error404 from '../../img/error404.png'
import Error404 from '../../img/404NotFond1.png'

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <Header />
            <ImgError>
                <img src={Error404} />
            </ImgError>
        </ErrorPageContainer>
    )
}

export default ErrorPage