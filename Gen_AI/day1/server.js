import express from "express"
import cors from "cors"
import OpenAI from "openai"
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
const port = process.env.PORT || 3000

// Create OpenAI client
const client = new OpenAI({
    apiKey:process.env.GROQ_API_KEY
})

// test route
app.get("/", (req,res)=>{
    res.json({msg:"test get route!"})
})

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})