import express from "express"
import cors from "cors"
import { chatRouter } from "./routes/chat_route.js"
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
const port = process.env.PORT || 3000

// test route
app.get("/", (req,res)=>{
    res.json({msg:"test get route!"})
})

//post (chat) route
app.use("/ai", chatRouter)

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})