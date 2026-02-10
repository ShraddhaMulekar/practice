// Find first non-repeating element

// I/p → [1,2,2,3,3,4]
// O/p → 1

let arr = [1,2,2,3,3,4]

let freq = {}

for (let num of arr){
    if(freq[num] === undefined){
        freq[num] = 1
    } else{
        freq[num]++
    }
}
console.log(freq)

let result = 0

for(let i=0; i<arr.length; i++){
    if(freq[arr[i]] === 1){
        result = arr[i]
        break
    }
}

console.log(result)