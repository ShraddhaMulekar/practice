// Check Anagram

let str1 = "listen"
let str2 = "silent"
// Output: true

if(str1.length !== str2.length){
    console.log(false)
} else{
    let freq = {}

    for(let char of str1){
        freq[char] = 1
    }

    for(let char of str2){
        if(!freq[char]){
            console.log(false)
            return
        }  
    }

    console.log(true)
}

