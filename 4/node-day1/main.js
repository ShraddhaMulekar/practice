const math = require("./modules/math")
const fs = require("fs")
const path = require("path")

console.log(math.add(5, 2))
console.log(math.sub(6, 4))
console.log(math.mul(3,8))

// fs Module

//write file
fs.writeFile("test.text", "Hello from file system!", (err)=>{
    if (err) throw err;
    console.log("file write!")
})

//read file
fs.readFile("test.text", "utf8", (err, data)=>{
    if (err) throw err
    console.log("data from read file:", data)
})

// path 
console.log(path.join(__dirname, "filename", "test.txt"))
