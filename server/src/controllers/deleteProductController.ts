import { Response, Request } from "express"
import Product from "../Models/Product"
import jwt, { JwtPayload } from "jsonwebtoken"

export const deleteProductController = async (req: Request, res: Response) => {
    const { id } = req.body
    const authorization = req.headers.authorization
    const token = authorization?.slice(7)

    // TODO: Impement so only admin role can delete
    try {
        const user = <JwtPayload>jwt.verify(`${token}`, `${process.env.JWT_SECRET}`)
        // Role based Auth
        if (user?.role !== "admin") return res.status(403).send("Authorization Error!")

        // Find by id and delete the product
        const deletedProduct = await Product.findByIdAndDelete(id)
        // Send products to client
        res.json(deletedProduct)
    } catch (error) {
        res.status(403).send("Authorization Error!")
    }
}