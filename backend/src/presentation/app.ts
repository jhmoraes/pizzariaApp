import cors from 'cors'
import express, { Express } from 'express'
import { AddressInfo } from "net"
import { Request, Response } from "express"

const app: Express = express()
app.use(express.json())
app.use(cors())



 app.get('/', (req: Request, res: Response) => {
    try{

        res.status(200).send("foi")

    }catch(err:any){

    }
}) 

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log('Servidor de pé em 3003')
    } else {
        console.error('O servidor falhou')
    }
})

export default app