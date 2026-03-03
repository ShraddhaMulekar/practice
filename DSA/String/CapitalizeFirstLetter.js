// Capitalize First Letter of Each Word
let str = "hello world"
// Output: "Hello World"

let result = ""
let cap = true

for(let i=0; i<str.length; i++){
    if(str[i] === " "){
        result += " "
        cap = true
    } else if (cap){
        result += str[i].toUpperCase()
        cap = false 
    } else{
        result += str[i]
    }
}
console.log(result)