import { Pizza, Product } from "../dtos/dtos.controller"


export interface ProductsBusiness {
    getAllProducts: () =>Promise<Product[]>
    getProductById: (id:string)=>Promise<Product>
    createNewPizza: (input:Pizza)=>Promise<void>
}
