import express from "express"
import cors from "cors"
import mongoose from "mongoose"

import * as dotenv from 'dotenv'
dotenv.config()

// https://stackoverflow.com/questions/31592726/how-to-store-a-file-with-file-extension-with-multer
import multer from "multer"
import { nanoid } from 'nanoid'; // @3.3.4 (@4+ crashes app 'ERR_REQUIRE_ESM') https://github.com/ai/nanoid/issues/365
import * as mime from 'mime-types';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './images');
  },
  filename: function (req, file, cb) {
    /* generates a "unique" name - not collision proof but unique enough for small sized applications */
    let id = nanoid();
    /* need to use the file's mimetype because the file name may not have an extension at all */
    let ext = mime.extension(file.mimetype);
    cb(null, `${id}.${ext}`);
  }
});

const upload = multer({ storage: storage })


// Controllers
import { createProductController } from "./controllers/createProductController"
import { getProductsController } from "./controllers/getProductsController"
import { registerController } from "./controllers/registerController"
import { loginController } from "./controllers/loginController"
import { deleteProductController } from "./controllers/deleteProductController"
import { editProductController } from "./controllers/editProductController"

// Setup
const app = express()
const PORT = 5000
// Cors options
var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Middleware
app.use(express.static("./images"))
app.use(express.json())
app.use(cors(corsOptions))

app.get("/products", getProductsController)
app.post("/products", upload.single('image'), createProductController)
app.delete("/products", deleteProductController)

app.put("/products/:productId", editProductController)

app.post("/register", registerController)

app.post("/login", loginController)

const db = mongoose.connect(`${process.env.MONGO_URL}`).then(() => {
  app.listen(PORT)
  console.log(`Listening on Port:${PORT}`)
})
