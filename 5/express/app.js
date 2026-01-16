const express = require("express")

const app = express()
const port = 3000

app.get("/", (req, res)=>{
    res.send("welcome to express get method")
})

app.get("/user/:id", (req, res)=>{
    res.json({
        userId: req.params.id,
        age : req.query.age
    })
})

app.listen(port, ()=>{
    console.log(`server start on http://localhost:${port}`)
})