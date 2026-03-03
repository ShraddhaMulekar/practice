// Check Palindrome
let str = "madam"
// Output: true

let rev = ""
for(let i=str.length-1; i>=0; i--){
    rev += str[i]
}

str === rev ? console.log("true")  : console.log("false")