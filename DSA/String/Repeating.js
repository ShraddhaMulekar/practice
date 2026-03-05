// Find First Repeating Character
const str = "abcadeb"
// Output: "a"

let freq = {}
for(let char of str){
    if(freq[char] === undefined){
        freq[char] = 1
    } else{
        freq[char]++
    }    
}
console.log(freq)

for(let key in freq){
    if(freq[key] > 1){
        console.log(key)
        break
    }
}
