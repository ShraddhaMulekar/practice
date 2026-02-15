import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { aiRoutes } from "./routes/aiRoutes.js"
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("start get route..")
})

app.use("/ai", aiRoutes)

app.listen(port, ()=>{
    console.log(`server connected successful on http://localhost:${port}`)
})