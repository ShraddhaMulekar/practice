import express from "express"
import dotenv from "dotenv"
import { connectDb } from "./config/connectDb.js"
dotenv.config()

const app = express()
app.use(express.json())
const port = process.env.PORT || 3000

app.listen(port, async()=>{
    await connectDb()
    console.log(`server has started on http://localhost:${port}`)
})
