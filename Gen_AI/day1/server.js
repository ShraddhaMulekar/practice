import express from "express"
import cors from "cors"
import OpenAI from "openai"
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.use(express.json())
const port = process.env.PORT || 3000

app.use(cors())

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})