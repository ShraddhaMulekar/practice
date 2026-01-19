const express = require("express")

let app = express()

app.listen(3030, ()=>{
    console.log(`server started on http://localhost:3030`)
})