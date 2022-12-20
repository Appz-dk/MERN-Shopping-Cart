import { Response, Request } from "express"
import jwt from "jsonwebtoken"
import { Types } from "mongoose";
import User from "../Models/User"

type TUserObject = {
    username: string,
    password?: string;
    _id: Types.ObjectId
}

export const loginController = async (req: Request, res: Response) => {
    const { username, password } = req.body

    // See if username & pw exists in Users
    const user = await User.findOne({ username, password })
    // Login user with the username & pw

    if (!user) res.status(401).send("Invalid login")
    else {
        // Delete password from object before making a token ??
        const userObject: TUserObject = user.toObject()
        delete userObject.password
        const token = jwt.sign(userObject, "super-secret-password")
        res.json({
            token,
            user
        })
    }
}