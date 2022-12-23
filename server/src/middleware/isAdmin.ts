import { Response, Request, NextFunction } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"


export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    // Verify token
    try {
        const authorization = req.headers.authorization
        const token = authorization?.slice(7)
        const user = <JwtPayload>jwt.verify(`${token}`, `${process.env.JWT_SECRET}`)
        // Role based Auth
        if (user?.role !== "admin") return res.status(403).send("Authorization Error!")
    } catch (error) {
        res.status(401).send("Authentication Error!")
    }

    next()
}