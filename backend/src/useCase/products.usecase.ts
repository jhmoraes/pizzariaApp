import { IProductDataBase, IProductsBusiness } from "./common/ports/repositories/repositories.interface.usecase"
import { Pizza, Product } from "./common/ports/dtos/dtos.usecase"

export class ProductsBusiness implements IProductsBusiness {

    constructor(
        private productsDataBase: IProductDataBase
    ) { }

    public getAllProducts = async (): Promise<Product[]> => {

        const result: Product[] = await this.productsDataBase.getAllProducts()

        return result
    }


    public getProductById = async (id: string): Promise<Product> => {

        const result: Product = await this.productsDataBase.getProductById(id)

        return result
    }

    public createNewPizza = async (input: Pizza): Promise<void> => {

        await this.productsDataBase.createNewPizza(input)

    }

}