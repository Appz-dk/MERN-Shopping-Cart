import { Response, Request } from "express"
import Product from "../Models/Product"
import jwt, { JwtPayload } from "jsonwebtoken"

export const editProductController = async (req: Request, res: Response) => {
    const { productId } = req.params
    const { name, description, price } = req.body
    const authorization = req.headers.authorization
    const token = authorization?.slice(7)

    try {
        const user = <JwtPayload>jwt.verify(`${token}`, `${process.env.JWT_SECRET}`)
        // Role based Auth
        if (user?.role !== "admin") return res.status(403).send("Authorization Error!")

        // Find by id and delete the product
        const editedProduct = await Product.findByIdAndUpdate(productId, { name, description, price })
        // Send products to client
        res.json(editedProduct)
    } catch (error) {
        res.status(403).send("Authorization Error!")
    }
}