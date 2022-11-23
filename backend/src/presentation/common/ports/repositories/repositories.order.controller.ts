import { Order, Product } from "../dtos/dtos.controller"


 export interface IOrdersBusiness {
    createOrder:(id: string, idProduct:string[]) =>Promise<void>,
    getOrderList: ()=>Promise<Order[]>
    getOrderById:(idOrder:string)=>Promise<Order[]>
} 