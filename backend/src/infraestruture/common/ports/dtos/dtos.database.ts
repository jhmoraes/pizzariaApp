

export type Product = {
    id:string,
    pizza:string,
    preco:number,
    ingredientes?:string
}

export type Order = {
    idOrder: string,
    idProduct: string
}

export type Pizza = {
    id: string,
    pizza: string,
    preco: number,
    ingredientes: string
}