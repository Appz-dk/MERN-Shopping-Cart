import { Response, Request } from "express"
import User from "../Models/User"

export const registerController = async (req: Request, res: Response) => {
    const { username, password } = req.body

    const newUser = new User({
        username,
        password
    })

    const user = await newUser.save()

    res.json(user)
}