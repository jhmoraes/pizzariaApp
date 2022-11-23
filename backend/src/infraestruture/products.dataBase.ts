import { SQLStatement } from "sql-template-strings"
import { DataBaseErr } from "../common/customeError"
import { connectionDataBase } from "./database.config/connection.database"
import { Product, Pizza } from "./common/ports/dtos/dtos.database"
import { IProductDataBase } from "./common/ports/repositories/repository.interface.dataBase"



export class ProductsDataBase extends connectionDataBase implements IProductDataBase {

    public getAllProducts = async (): Promise<Product[]> => {


        const result: Product[] = await ProductsDataBase.connection('pizza_table')
            .select("*")

        console.log("aqui result", result)

        return result
    }

    public getProductById = async (id:string): Promise<Product> => {

        const result:any = await ProductsDataBase.connection('pizza_table')
            .select("*")
            .where("id", id)
        return result
    }

    public createNewPizza = async (input: Pizza): Promise<void> => {

        try { 

            const { id, pizza, preco, ingredientes } = input

           await ProductsDataBase.connection('pizza_table')
                .insert({
                    id,
                    pizza,
                    preco,
                    ingredientes
                })


        } catch (err: any) {
            throw new DataBaseErr("Erro de enserção no banco")
            
        } 

    }
}