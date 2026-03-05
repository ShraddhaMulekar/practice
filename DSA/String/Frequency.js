// Find Character Frequency
let str = "apple"
// Output: {a:1,p:2,l:1,e:1}

let freq = {}

for(let i=0; i<str.length; i++){
    if(freq[str[i]] === undefined){
        freq[str[i]] = 1
    } else{
        freq[str[i]]++
    }
}
let char = freq["p"]  //check the value of "p"
console.log({char})

console.log(freq)