import express, {Request, Response} from "express"
import cors from "cors"
import mongoose from "mongoose"

import * as dotenv from 'dotenv'
dotenv.config() 

// Schema
import CartSchema from "./Models/CartSchema"

// Setup
const app = express()
const PORT = 5000
// Cors options
var corsOptions = {
    origin: 'http://loaclhost:5173',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

// Middleware
app.use(express.json())
app.use(cors(corsOptions))

app.get("/",  async (req: Request, res: Response) => {
    const newItem = new CartSchema({
        title: "This works hopefully?"
    })
    const createdItem = await newItem.save()
    res.send("hello world")
})

const db = mongoose.connect(`${process.env.MONGO_URL}`).then(() => {
    app.listen(PORT)
    console.log(`Listening on Port:${PORT}`)
})
