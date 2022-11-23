import React, { useEffect, useState } from "react"
import axios from "axios"
import GlobalStateContext from "./GlobalStateContext"
import { BASE_URL_PRODUCT, BASE_URL_ORDER } from '../constants/BASE_URL'



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
    const idList = []

    useEffect(() => {
        allProducts()
    }, [])


    /********* REQUISIÇÕES AXIOS ******/

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
    
    /********* FIM AXIOS ******/


    /**** FUNÇÕES DA APLICAÇÃO ******/

    const addItems = (pizzaName) => {

        for (let i = 0; i < cart.length; i++) {
            cart[i].pizza === pizzaName && cart[i].quantity++
        }

        setOrderStorege(cart)
        getOrderStorege()
    }

    const removeItems = (pizzaName) => {

        for (let i = 0; i < cart.length; i++) {
            cart[i].pizza === pizzaName && cart[i].quantity--

            if (cart[i].quantity === 0) {
                cart.splice(i, 1)
            }
        }

        setOrderStorege(cart)
        getOrderStorege()
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

    //cria um array com o id e quantidade e guarda no localstorege
    const savedCart = (idProduct) => {

        const itemProduct = allProductItem.filter((item) => item.id === idProduct)

        if (idList.length > 0) {

            const idToCart = idList.filter((item) => {
                if (item.id === idProduct) {
                    return item
                } else {
                    return false
                }
            })

            if (idToCart.length === 0) {
                const newProduct = {
                    ...itemProduct[0],
                    quantity: 1
                }
                idList.push(newProduct)
            } else {
                idList.map((item) => {
                    if (item.id === idProduct) {
                        return { ...item, quantity: item.quantity++ }
                    }
                })
            }

        } else {
            const newProduct = {
                ...itemProduct[0],
                quantity: 1
            }
            idList.push(newProduct)
        }
        setOrderStorege(idList)
    }

    //converste e armazena no localStorege
    const setOrderStorege = (list) => {
        const convertStorege = JSON.stringify(list)
        localStorage.setItem("ORDER_LIST", convertStorege)
    }

    //busca os pedidos no localStorege
    const getOrderStorege = () => {
        const getListStorege = localStorage.getItem("ORDER_LIST")
        const listIdparseado = JSON.parse(getListStorege)

        setCart(listIdparseado)
    }

    const addToCart = () => { }

    const data = { allProductItem, savedCart, addToCart, getOrderStorege, cart, isButtonIncluir, setIsButtonIncluir, setIsFinalizeOrder, isFinalizeOrder, getAllOrders, allOrder, removeItems, addItems, orderListOrganization, viewAllOrder, setInputPizza, inputPizza, setInputPreco, inputPreco, setInputIngrediente, inputIngrediente, postNewProduct,  allProducts, msgUser }
    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}


export default GlobalState