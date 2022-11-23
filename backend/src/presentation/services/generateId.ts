import { v4 } from "uuid"
import { IidGenerator } from "../common/ports/repositories/repositoiries.service"


export class IdGenerator implements IidGenerator{

    public generateId = ():string =>{
        return v4()
    }
}