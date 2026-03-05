// Longest Word in Sentence
const str = "I love JavaScript programming"
// Output: "programming"

let word = ""
let longWord = ""

for(let i=0; i<str.length; i++){
    if(str[i] === " "){

        if(word.length > longWord.length){
            longWord = word
        }

        word =""
    } else{
        word+=str[i]
    }
}

if(word.length > longWord.length){
    longWord = word
}

console.log({longWord})
console.log(longWord.length)
