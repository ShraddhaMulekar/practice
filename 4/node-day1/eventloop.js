console.log("start")

setTimeout(()=>{
    console.log("set Time out")
},2000)

Promise.resolve().then(()=>{
    console.log("Promise")
})

console.log("End")