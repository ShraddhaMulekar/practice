const express = require("express")
const asyncHandler = require("express-async-handler")

let app = express()

app.get("/user", asyncHandler(async(req,res)=>{
    try {
        res.send("welcome from async handler!")
    } catch (error) {
        throw new Error("Async Error!")
    }
}))

app.listen(3030, ()=>{
    console.log(`server started on http://localhost:3030`)
})