const express = require("express")
const morgan = require("morgan")

const app = express()
const port = 3000
app.use(express.json())
app.use(morgan("dev"))
app.use(morgan("combined"))
app.use(morgan("tiny"))

const logger = (req, res, next)=>{
    console.log(`Method: ${req.method}, URL: ${req.url}`);
    next()
}
app.use(logger)

app.get("/", (req, res)=>{
    res.send("welcome to express get method")
})

app.get("/user/:id", (req, res)=>{
    res.json({
        userId: req.params.id,
        age : req.query.age
    })
})

app.get("/headers", (req, res) => {
  console.log(req.headers);
  res.json({
    contentType: req.headers["content-type"],
    userAgent: req.headers["user-agent"]
  });
});

app.post("/body", (req, res)=>{
    console.log(req.body)
    res.send(req.body)
})

app.listen(port, ()=>{
    console.log(`server start on http://localhost:${port}`)
})