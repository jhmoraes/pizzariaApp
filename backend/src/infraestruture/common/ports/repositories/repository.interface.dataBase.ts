import { Order, Pizza, Product } from "../dtos/dtos.database"



/*** ORDER *****/

export interface IOrderDataBase {
    createOrder: (id:string, idProduct:string[]) =>Promise<void>
    getOrderList: ()=>Promise<Order[]>
    getOrderById: (id:string)=>Promise<Order[]>
}

/**** PRODUCT *****/

export interface IProductDataBase {
    getAllProducts: () =>Promise<Product[]>
    getProductById: (id:string)=>Promise<Product>
    createNewPizza: (input:Pizza)=>Promise<void>
}