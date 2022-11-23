import { Handler, NextFunction, Request, Response } from "express"
import { isNotArray, MissingInformation } from "../../common/customeError"
import { Pizza, Product } from "../common/ports/dtos/dtos.controller"
import { IidGenerator } from "../common/ports/repositories/repositoiries.service"
import { ProductsBusiness } from "../common/ports/repositories/respositories.product.controller"


export class ProductsController {

    //posso fazer um result depois do .send() ??????
    //O send não interrompe a função?

    constructor(
        private productsBusiness: ProductsBusiness,
        private idGenerator: IidGenerator
    ) { }

    public getAllProducts = async (req: Request, res: Response): Promise<Product[] | undefined> => {

        try {

            const result: Product[] = await this.productsBusiness.getAllProducts()

            res.status(200).send(result)

            return result

        } catch (err: any) {
            res.status(err.statusCode).send(err.message)
        }


    }


    public getProductById = async (req: Request, res: Response, next: NextFunction): Promise<Product | void> => {

        try {

            const { id } = req.params

            if (!id || id === ":id") { throw new MissingInformation }

            const result: Product = await this.productsBusiness.getProductById(id)

            if (result) {

                res.status(200).send(result)

            }

            return result

        } catch (err: any) {
            res.status(err.statusCode).send(err.message || err)
        }

    }

    public createNewPizza = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

        try {

            const { pizza, preco, ingredientes } = req.body


            if (!pizza || !preco || !ingredientes) {
                return next(new MissingInformation)
            }

            if (pizza.length <= 2 || ingredientes.length <= 2) {
                return next(new MissingInformation)
            }

            const id: string = this.idGenerator.generateId()

            const input: Pizza = {
                id,
                pizza,
                preco,
                ingredientes,
            }

            await this.productsBusiness.createNewPizza(input)

            res.status(200).send("Nova pizza cadastrada!")

        } catch (err: any) {

            res.status(err.statusCode).send(err.message)

        }

    }
}