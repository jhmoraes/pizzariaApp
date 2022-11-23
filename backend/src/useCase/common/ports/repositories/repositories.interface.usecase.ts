import { Order, Pizza, Product } from "../dtos/dtos.usecase"


/**** PRODUCT *****/

export interface IProductsBusiness {
    getAllProducts: () =>Promise<Product[]>
    getProductById: (id:string)=>Promise<Product>
    createNewPizza: (input:Pizza)=>Promise<void>

}

export interface IProductDataBase {
    getAllProducts: () =>Promise<Product[]>
    getProductById: (id:string)=>Promise<Product>
    createNewPizza: (input:Pizza)=>Promise<void>

}


/**** ORDER *****/

export interface IOrdersBusiness {
    createOrder:(id:string, idProduct:string[]) =>Promise<void>,
    getOrderList: ()=>Promise<Order[]>
    getOrderById:(idOrder:string)=>Promise<Order[]>
}

export interface IOrdersDataBase {
    createOrder:(id:string, idProduct:string[])=>Promise<void>,
    getOrderList:()=>Promise<Order[]>
    getOrderById:(idOrder:string)=>Promise<Order[]>
} 

