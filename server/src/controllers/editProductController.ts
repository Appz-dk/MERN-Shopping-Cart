import { Response, Request } from "express"
import Product from "../Models/Product"
import jwt, { JwtPayload } from "jsonwebtoken"
import { TProduct } from "./createProductController"

export const editProductController = async (req: Request, res: Response) => {
    const { productId } = req.params
    const { name, description, price } = req.body
    //@ts-ignore
    const image = req.file
    const authorization = req.headers.authorization
    const token = authorization?.slice(7)

    try {
        const user = <JwtPayload>jwt.verify(`${token}`, `${process.env.JWT_SECRET}`)
        // Role based Auth
        if (user?.role !== "admin") return res.status(403).send("Authorization Error!")

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
    } catch (error) {
        res.status(403).send("Authorization Error!")
    }
}