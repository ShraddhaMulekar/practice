// Reverse an Array

let arr = [1,2,3,4]
// Output: [4,3,2,1]

let reverse = []

// for(let num of arr){
//     reverse.unshift(num)
// }

for(let i=arr.length-1; i>=0; i--){
    reverse.push(arr[i])
}

console.log(reverse)