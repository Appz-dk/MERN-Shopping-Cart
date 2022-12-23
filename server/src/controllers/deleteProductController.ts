import { Response, Request } from "express"
import Product from "../Models/Product"

export const deleteProductController = async (req: Request, res: Response) => {
    const { id } = req.body

    // Find by id and delete the product
    const deletedProduct = await Product.findByIdAndDelete(id)
    // Send products to client
    res.json(deletedProduct)

}