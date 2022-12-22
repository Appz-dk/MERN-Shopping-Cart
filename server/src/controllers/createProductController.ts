import { Response, Request } from "express"
import Product from "../Models/Product"
import jwt, { JwtPayload } from "jsonwebtoken"


export const createProductController = async (req: Request, res: Response) => {
    const { price, name, description } = req.body
    const authorization = req.headers.authorization
    const token = authorization?.slice(7)

    // Verify token
    try {
        const user = <JwtPayload>jwt.verify(`${token}`, `${process.env.JWT_SECRET}`)
        // Role based Auth
        if (user?.role !== "admin") return res.status(403).send("Authorization Error!")

        // If user has role of admin create a new product
        const newProduct = new Product({
            price,
            name,
            description,
        })

        const product = await newProduct.save()
        res.json(product)
    } catch (error) {
        res.status(403).send("Authorization Error!")
    }
}