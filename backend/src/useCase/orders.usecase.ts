import { Order } from "./common/ports/dtos/dtos.usecase"
import { IOrdersBusiness, IOrdersDataBase } from "./common/ports/repositories/repositories.interface.usecase"

export class OrderBusiness implements IOrdersBusiness {

    constructor(
        private ordersDataBase: IOrdersDataBase
    ) { }


    //cria um novo pedido
    public createOrder = async (id: string, idProduct: string[]): Promise<void> => {

        console.log("entrou business order", id, idProduct)

        await this.ordersDataBase.createOrder(id, idProduct)

    }

    //vai buscar todos os pedidos existentes no banco
    public getOrderList = async ():Promise<Order[]> => {

        const result: Order[] = await this.ordersDataBase.getOrderList()

        return result
    }

    //busca pedido pelo id
    //Order
    public getOrderById = async (idOrder: string): Promise<Order[]> => {

        const result: Order[] = await this.ordersDataBase.getOrderById(idOrder)
        return result
    }

}