import express from "express"
import dotenv from "dotenv"
import userRouter from "./routes/user_route.js"
import dbConnected from "./db/db.js"
import cors from "cors"
dotenv.config()

let app = express()
app.use(express.json())
const port = process.env.PORT || 5000

app.use(cors({
    origin : 'http://localhost:5173',
    method:["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Content-Type", "Authorization"]
}))

//routes
app.use("/user", userRouter)

app.listen(port, async()=>{
    await dbConnected()
    console.log(`server started on http://localhost:${port}`)
})