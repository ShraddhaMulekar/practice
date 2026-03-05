// Reverse Words in Sentence
let str = "I love JavaScript"
// Output: "JavaScript love I"

let word = ""
let result = ''

for(let i=str.length-1; i>=0; i--){
    if(str[i] === " "){
        result += word + " "
        word = ""
    } else{
        word = str[i] + word
    }
}

result += word
console.log(result)