const express = require("express")
const asyncHandler = require("express-async-handler")
const multer = require("multer")

let app = express()

app.get("/user", asyncHandler(async (req,res) => {
    res.send("welcome from async handler!")
}))

const storage = multer.diskStorage({
    destination : "uploads/",
    filename : (req, file, cb)=>{
        cb(null, Date.now() + "-" + file.originalname)
    }
})

const upload = multer({storage})

app.post("/upload", upload.single("file"), (req, res)=>{
    res.json({file: req.file})
})

app.listen(3030, ()=>{
    console.log(`server started on http://localhost:3030`)
})