import express from "express"
import cors from "cors"
const app = express()
const port = 5000

// Cors options
var corsOptions = {
    origin: 'http://loaclhost:5173',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

// Middleware
app.use(express.json())
app.use(cors(corsOptions))

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})