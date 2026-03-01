// Rotate Array by K Steps

let arr = [1,2,3,4,5]
let k=3
// Output: [4,5,1,2,3]

let rotate = []
let len = arr.length
let rem = k%len

for(let i=rem; i<len; i++){
    rotate.push(arr[i])
}


for(let i=0; i<rem; i++){
    rotate.push(arr[i])
}
console.log(rotate)