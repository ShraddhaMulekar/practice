// Find missing number (1 to n)

// I/p → [1,2,4,5]
// O/p → 3

let arr = [1,2,4,5]

// let n = arr.length+1
// let expectedSum = n*(n+1)/2
// console.log("expectedSum:", expectedSum)
// let sum =0
// for(let num of arr){
//     sum+=num
// }
// console.log("sum:", sum)
// let missing_num = expectedSum-sum
// console.log("missing number:", missing_num)
let n = arr.length+1
let missing = []

for(let i=1; i<n; i++){
    if(!arr.includes(i)){
        missing.push(i)
    }
}
console.log(missing)