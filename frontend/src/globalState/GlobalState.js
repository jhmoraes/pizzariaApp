import React, { useEffect, useState } from "react"
import axios from "axios"
import GlobalStateContext from "./GlobalStateContext"
import { BASE_URL_PRODUCT_END, BASE_URL_PRODUCT, BASE_URL_ORDER } from '../constants/BASE_URL'
import { LOCAL_STOREGE_CART } from '../constants/BASE_CONSTANTS'
import {http, funcTesteHttp} from '../http/http'
import { useQuery } from "react-query";



const GlobalState = (props) => {

    const [allProductItem, setAllProductItem] = useState([])
    const [allOrder, setAllOrder] = useState([])
    const [viewAllOrder, setViewAllOrder] = useState([])
    const [cart, setCart] = useState([])
    const [isButtonIncluir, setIsButtonIncluir] = useState(true)
    const [isFinalizeOrder, setIsFinalizeOrder] = useState(false)
    const [inputPizza, setInputPizza] = useState('')
    const [inputPreco, setInputPreco] = useState()
    const [inputIngrediente, setInputIngrediente] = useState()
    const [msgUser, setMsgUser] = useState()
    const [msgErr, setMsgErr] = useState()
    const [msgConfirm, setMsgConfirm] = useState()
    const listToCart = []

    useEffect(() => {
        allProducts()
    }, [])

    /********* REQUISIÇÕES AXIOS ******/

    /* const funcTesteHttp = async () => {
        const getTeste = await http.get(`${BASE_URL_PRODUCT_END}/products`)
        console.log(getTeste);
    } */
    
    funcTesteHttp()
    
    const allProducts = () => {
        axios.get(`${BASE_URL_PRODUCT}/products`)
            .then((resp) => {
                setAllProductItem(resp.data)
            })
            .catch((err) => {
                setMsgErr(err)
            })
    }

    const getAllOrders = () => {
        axios.get(`${BASE_URL_ORDER}/allorder`)
            .then((resp) => {
                setAllOrder(resp.data)
            })
            .catch((err) => {
                setMsgErr(err)
            })
    }

    const postNewProduct = () => {
        const body = {
            pizza: inputPizza,
            preco: inputPreco,
            ingredientes: inputIngrediente
        }

        axios.post(`${BASE_URL_PRODUCT}/newpizza`, body)
            .then((resp) => {
                setMsgUser('Nova Pizza Cadastrada!')
                setInputPizza('')
                setInputPreco('')
                setInputIngrediente('')
            })
            .catch((err) => {
                setMsgErr(err)
            })
    }

    const createOrder = (idProductCartString) => {

        const body = {
            idProduct: idProductCartString
        }

        axios.post(`${BASE_URL_ORDER}/neworder`, body)
            .then((resp) => {
                setMsgConfirm(resp.data)
                localStorage.removeItem(LOCAL_STOREGE_CART)
                saveToCartState()
                setIsFinalizeOrder(false)
            })
            .catch((err) => {
                setMsgErr(err)
            })

    }

    /********* FIM AXIOS ******/


    /**** FUNÇÕES DA APLICAÇÃO ******/

    const addItems = (pizzaName) => {

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].pizza === pizzaName) {
                cart[i].quantity++;
                cart[i].total = cart[i].preco * cart[i].quantity
            }
        }

        setOrderStorege(cart)
        saveToCartState()
    }

    const removeItems = (pizzaName) => {

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].pizza === pizzaName) {
                cart[i].quantity--;
                cart[i].total -= cart[i].preco
            }

            if (cart[i].quantity === 0) {
                cart.splice(i, 1)
            }
        }

        setOrderStorege(cart)
        saveToCartState()
    }

    const orderListOrganization = () => {

        let newAllOrder = []

        for (let item of allOrder) {
            const arrayProductOrder = item.id_product.split(',')
            const newOrder = {
                ...item,
                id_product: arrayProductOrder
            }
            newAllOrder.push(newOrder)
        }

        for (let i = 0; i < newAllOrder.length; i++) {
            for (let j = 0; j < newAllOrder[i].id_product.length; j++) {
                for (let l = 0; l < allProductItem.length; l++) {
                    if (newAllOrder[i].id_product[j] === allProductItem[l].id) {
                        newAllOrder[i].id_product[j] = allProductItem[l]
                    }
                }
            }

        }
        setViewAllOrder(newAllOrder)
    }

    const savedCart = (idProduct) => {
        
        const resultGetLocalStorege = getOrderStorege()

        if (resultGetLocalStorege !== null) {
            let isFound = false

            for (let item of resultGetLocalStorege) {

                if (item.id === idProduct) {
                    isFound = true
                    item.quantity++
                    item.total = item.total + item.preco
                }
            }

            if (!isFound) {

                const itemProduct = allProductItem.filter((item) => item.id === idProduct)
                resultGetLocalStorege.push({
                    ...itemProduct[0],
                    quantity: 1,
                    total: itemProduct[0].preco
                })

                setOrderStorege(resultGetLocalStorege)

            } else {
                setOrderStorege(resultGetLocalStorege)
            }

        } else {
            const itemProduct = allProductItem.filter((item) => item.id === idProduct)

            const newProduct = {
                ...itemProduct[0],
                quantity: 1,
                total: itemProduct[0].preco
            }
            listToCart.push(newProduct)

            setOrderStorege(listToCart)
        }
       
    }

    const setOrderStorege = (list) => {
        const convertStorege = JSON.stringify(list)
        localStorage.setItem(LOCAL_STOREGE_CART, convertStorege)
    }

    const getOrderStorege = () => {
        const getListStorege = localStorage.getItem(LOCAL_STOREGE_CART)
        const listIdparseado = JSON.parse(getListStorege)

        return listIdparseado
    }

    const saveToCartState = () => {
        setCart(getOrderStorege())
    }

    const newOrder = () => {
        let idProductCart = []
        for (let item of cart) {
            idProductCart.push(item.id)
        }
        const idProductCartString = idProductCart
        createOrder(idProductCartString)
    }


    const data = { allProductItem, savedCart, getOrderStorege, cart, isButtonIncluir, setIsButtonIncluir, setIsFinalizeOrder, isFinalizeOrder, getAllOrders, allOrder, removeItems, addItems, orderListOrganization, viewAllOrder, setInputPizza, inputPizza, setInputPreco, inputPreco, setInputIngrediente, inputIngrediente, postNewProduct, allProducts, msgUser, newOrder, createOrder, saveToCartState, msgConfirm, setMsgConfirm }
    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}


export default GlobalState