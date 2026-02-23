import express from 'express'
import dotenv from 'dotenv'
import { agentRouter } from './routes/agentRoute.js'
dotenv.config()

const app = express()
app.use(express.json())
const port = process.env.PORT || 3000

app.use("/ai", agentRouter)

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})