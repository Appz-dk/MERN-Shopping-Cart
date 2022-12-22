import { Response, Request } from "express"
import Product from "../Models/Product"

export const deleteProductController = async (req: Request, res: Response) => {
    const { id } = req.body

    // TODO: Impement so only admin role can delete

    // Find by id and delete the product
    const deletedProduct = await Product.findByIdAndDelete(id)
    // Send products to client
    res.json(deletedProduct)
}