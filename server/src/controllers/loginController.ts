import { Response, Request } from "express"
import jwt from "jsonwebtoken"
import User from "../Models/User"

export const loginController = async (req: Request, res: Response) => {
    const { username, password } = req.body

    // See if username & pw exists in Users
    const user = await User.findOne({ username, password })
    // Login user with the username & pw

    if (!user) res.status(401).send("Invalid login")
    else {
        // Delete password from object before making a token ?? Or is hashing it enough ??
        const token = jwt.sign(user.toJSON(), "super-secret-password")
        console.log(user)
        res.json({
            token,
            user
        })
    }
}