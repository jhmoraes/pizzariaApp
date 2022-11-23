import express from 'express'
import { OrderDataBase } from '../../infraestruture/orders.dataBase'
import { OrderBusiness } from '../../useCase/orders.usecase'
import { OrderController } from '../orders.controller/orders.controller'
import { IdGenerator } from '../services/generateId'


export const orderRouter = express.Router()

const orderDataBase = new OrderDataBase()
const orderBusiness = new OrderBusiness(orderDataBase)
const orderController = new OrderController(orderBusiness, new IdGenerator) 


orderRouter.post("/api/neworder", orderController.createOrder) //novo pedido
orderRouter.get("/api/allorder", orderController.getOrderList) //todos os pedido
orderRouter.get("/api/order/:idOrder", orderController.getOrderById) //pedido por id

