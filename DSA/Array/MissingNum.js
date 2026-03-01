// Find Missing Number (1 → n)

let arr = [1,2,3,4,6]
// Output: 5

let n = arr.length+1
let sum = n*(n+1)/2
let actSum = 0

for(let i=0; i<arr.length; i++){
    actSum += arr[i]
}

console.log(sum-actSum)