import { Request, Response } from "express"
import { isNotArray, MissingInformation, notFound } from "../../common/customeError"
import { Order } from "../common/ports/dtos/dtos.controller"
import { IidGenerator } from "../common/ports/repositories/repositoiries.service"
import { IOrdersBusiness } from "../common/ports/repositories/repositories.order.controller"



export class OrderController {
    constructor(
        private orderBusiness: IOrdersBusiness,
        private idGenerator: IidGenerator
    ) { }

    public createOrder = async (req: Request, res: Response): Promise<void> => {

        try {

            const { idProduct } = req.body

            console.log("controller order", idProduct)

            if (!idProduct) {
                throw new MissingInformation
            }

            if (!Array.isArray(idProduct)) {
                throw new isNotArray("itens")
            }

            const id: string = this.idGenerator.generateId()

            console.log("id order", id)

            await this.orderBusiness.createOrder(id, idProduct)

            res.status(201).send("Pedido Criado!")


        } catch (err: any) {
            res.status(err.statusCode).send(err.message)
        }
    }

    public getOrderList = async (req: Request, res: Response): Promise<Order[] | undefined> => {

        try {

            const result: Order[] = await this.orderBusiness.getOrderList()

            res.status(200).send(result)
            return result

        } catch (err: any) {
            console.log(err)
        }
    }

    public getOrderById = async (req: Request, res: Response): Promise<Order[] | undefined> => {

        try {

            const { idOrder } = req.params
            console.log('byId', idOrder)

            if (!idOrder || idOrder === ":idOrder") { throw new MissingInformation }
            
            const result: Order[] = await this.orderBusiness.getOrderById(idOrder)
             console.log("length",result.length)
             
            if(result.length < 1){throw new notFound("Id");
            }

            res.status(200).send(result)
            return result

        } catch (err: any) {
            res.status(err.statusCode).send(err.message)
        }
    }

}