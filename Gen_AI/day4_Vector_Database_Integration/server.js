import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { uploadRouter } from "./routes/uploadRoute.js"
import { loadModel } from "./embedding.js"
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get("/", (req, res)=>{
    res.send("check..")
})

app.use("/uploads", uploadRouter)

await loadModel()

app.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`)
})