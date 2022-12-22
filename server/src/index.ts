import express from "express"
import cors from "cors"
import mongoose from "mongoose"

import * as dotenv from 'dotenv'
dotenv.config()


// Controllers
import { createProductController } from "./controllers/createProductController"
import { getProductsController } from "./controllers/getProductsController"
import { registerController } from "./controllers/registerController"
import { loginController } from "./controllers/loginController"
import { deleteProductController } from "./controllers/deleteProductController"

// Setup
const app = express()
const PORT = 5000
// Cors options
var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Middleware
app.use(express.json())
app.use(cors(corsOptions))

app.get("/products", getProductsController)
app.post("/products", createProductController)
app.delete("/products", deleteProductController)

app.post("/register", registerController)

app.post("/login", loginController)

const db = mongoose.connect(`${process.env.MONGO_URL}`).then(() => {
  app.listen(PORT)
  console.log(`Listening on Port:${PORT}`)
})
