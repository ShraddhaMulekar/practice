import express from "express"
import dotenv from "dotenv"
import userRouter from "./routes/user_route.js"
dotenv.config()

let app = express()
const port = process.env.PORT || 5000

//routes
app.use("/user", userRouter)

app.listen(port, ()=>{
    console.log(`server started on http://localhost:${port}`)
})