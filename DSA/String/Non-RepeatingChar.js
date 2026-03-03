// First Non-Repeating Character
let str = "aabbcdd"
// Output: "c"

let freq = {}

for (let i = 0; i < str.length; i++) {
    if(freq[str[i]]===undefined){
        freq[str[i]]=1
    } else{
        freq[str[i]]++
    } 
}

for(let char in freq){
    if(freq[char] === 1){
        console.log(char)
        break
    }
}