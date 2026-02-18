import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { embeddingRoute } from "./routes/embeddingRoute.js"
import { loadModel } from "./services/embeddingService.js"
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("check app!")
})

app.use("/embedding", embeddingRoute)

await loadModel()

app.listen(port, ()=>{
    console.log(`server started on http://localhost:${port}`)
})