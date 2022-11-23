import { connectionDataBase } from "./database.config/connection.database"
import { Order } from "./common/ports/dtos/dtos.database"
import { IOrderDataBase } from "./common/ports/repositories/repository.interface.dataBase"



export class OrderDataBase extends connectionDataBase implements IOrderDataBase{
    
    public createOrder = async(id:string, idProduct:string[]):Promise<void> =>{

        const id_order = id

        await OrderDataBase.connection('order_table')
        .insert({
            id_order,
            id_product: idProduct.map(id => id)
        })
     
    } 

    public getOrderList = async():Promise<Order[]>=>{

        const result: Order[] = await OrderDataBase.connection('order_table')
        .select('id_order', 'id_product')
        .orderBy('id', 'desc') //retorna os ultimos registros
        .limit(4)


        return result
    } 
    public getOrderById = async(idOrder:string):Promise<Order[]> =>{
        
        const result:Order[]= await OrderDataBase.connection('order_table')
        .select('id_order', 'id_product')
        .where('id_order', idOrder)

        console.log('data base', result)
        
        return result
    }
}


