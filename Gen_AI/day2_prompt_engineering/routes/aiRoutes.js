import express from 'express'

export const aiRoutes = express.Router()

aiRoutes.get("/", (req, res)=>{
    res.send("ai route")
})