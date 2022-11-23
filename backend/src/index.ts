import app from "./presentation/app"
import { orderRouter } from "./presentation/routes/order.router"
import { productRouter } from "./presentation/routes/products.router"
import { Handler, json, NextFunction, Request, Response } from "express"

console.log('index')

/* const resolver = (handlerFn: Handler) => {
    console.log('aqui handler')
    return (req: Request, res: Response, next: NextFunction) => {
        return Promise.resolve(handlerFn(req, res, next))
            .catch((err: any) => { return next(err) })
    }
} */

//app.use("/product", resolver(productRouter))
app.use("/product", productRouter)
app.use("/order", orderRouter)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.log("err no index", err.statusCode, err.message)
    return res.status(err.statusCode).send(err.message || err)

})


/* app.use((err: any, req: Request, res: Response, next:NextFunction) => {

    console.log("err no index", err.statusCode, err.message)
    return res.status(err.statusCode).send(err.message || err)
})   */