import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react'
import PresentationPage from '../pages/presentationApp/presentationApp'
import HomePage from '../pages/HomePage/HomePage'
import OrderPage from '../pages/OrderPage/OrderPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import NewPizzaPage from '../pages/NewPizzaPage/NewPizzaPage'
import OrderHistoryPage from '../pages/OrderHistoryPage/OrderHistoryPage'

const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<PresentationPage/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/create' element={<NewPizzaPage/>}/>
            <Route path='/feed' element={<FeedPage/>}/>
            <Route path='/order' element={<OrderPage/>}/>
            <Route path='/allorder' element={<OrderHistoryPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
            <Route/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router