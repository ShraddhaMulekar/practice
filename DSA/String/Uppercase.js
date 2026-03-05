// Convert to Uppercase (without .toUpperCase())
const str = "hEllo"
// Output: "HELLO"

let result = ""

for(let char of str){
    let code = char.charCodeAt(0)

    if(code >= 97 && code <= 122 ){
        result += String.fromCharCode(code - 32)
    } else{
        result += char
    }
}

console.log(result)