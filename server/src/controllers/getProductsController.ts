import { Response, Request } from "express"
import Product from "../Models/Product"

export const getProductsController = async (req: Request, res: Response) => {
        // Get all products from db
        const products = await Product.find({})
        // Send products to client
        res.json(products)
}