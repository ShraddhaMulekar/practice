// Remove Spaces
let str =  "h e l l o"
// Output: "hello"

let result = ""

for(let i=0; i<str.length; i++){
    if(str[i]!==" "){
        result += str[i]
    }
}
console.log({result})
