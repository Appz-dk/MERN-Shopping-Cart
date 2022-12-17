import { Response, Request } from "express"
import Product from "../Models/Product"

export const createProductController = async (req: Request, res: Response) => {
    const {price, name, description} = req.body

        const newProduct = new Product({
            price,
            name,
            description,
        })
    
        const product = await newProduct.save()
        res.send(JSON.stringify(product))
}