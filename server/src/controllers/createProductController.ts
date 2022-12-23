import { Response, Request } from "express"
import Product from "../Models/Product"

export type TProduct = {
    name: string,
    price: string,
    description: string,
    image?: string
}


export const createProductController = async (req: Request, res: Response) => {
    const { price, name, description } = req.body
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

    // If user has role of admin create a new product
    const newProduct = new Product({
        ...updateObject
    })

    const product = await newProduct.save()
    res.json(product)

}