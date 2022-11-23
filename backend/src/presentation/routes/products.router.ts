import express from 'express'
import { ProductsDataBase } from '../../infraestruture/products.dataBase'
import { ProductsBusiness } from '../../useCase/products.usecase'
import { ProductsController } from '../products.controller/products.controller'
import { IdGenerator } from '../services/generateId'

export const productRouter = express.Router()

const productsDataBase = new ProductsDataBase()
const productsBusiness = new ProductsBusiness(productsDataBase)
const productsController = new ProductsController(productsBusiness, new IdGenerator) 

productRouter.get("/api/products/:id", productsController.getProductById) //produto por id

productRouter.get("/api/products", productsController.getAllProducts) //lista de todas as pizzas
productRouter.post("/api/newpizza", productsController.createNewPizza) // cadastrar nova pizza 


