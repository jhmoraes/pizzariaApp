import {NextFunction} from "express"

export class CustomError extends Error{

    public statusCode: number

    constructor(status:number, menssage: string){
        super(menssage)
        this.statusCode = status
    }
}


export class MissingInformation extends CustomError{
    constructor(){
        super(400, "Faltam Informações")
    }
}

export class isNotArray extends CustomError{
    constructor(propriedade:string){
        super(400, `A propriedade ${propriedade} deve ser um array de strings`)
    }
}

export class notFound extends CustomError{
    constructor(propriedade:string){
        super(400, `${propriedade} não foi encontrado`)
    }
}

export class DataBaseErr extends CustomError{
    constructor(message: string){
        super(500, message)
    }
}