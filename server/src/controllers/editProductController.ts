import { Response, Request } from "express"
import Product from "../Models/Product"
import { TProduct } from "./createProductController"

export const editProductController = async (req: Request, res: Response) => {
    const { productId } = req.params
    const { name, description, price } = req.body
    //@ts-ignore
    const image = req.file

    const updateObject: TProduct = {
        name,
        description,
        price
    }
    // If an image was added
    if (image) {
        updateObject.image = image.filename
    }

    // Find by id and update the product
    const editedProduct = await Product.findByIdAndUpdate(productId, {
        ...updateObject
    })
    // Send products to client
    res.json(editedProduct)
}