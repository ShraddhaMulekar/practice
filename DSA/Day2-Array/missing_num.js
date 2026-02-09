// Find missing number (1 to n)

// I/p → [1,2,4,5]
// O/p → 3

let arr = [1,2,4,5,6]

let n = arr.length+1
let expectedSum = n*(n+1)/2
console.log("expectedSum:", expectedSum)
let sum =0
for(let num of arr){
    sum+=num
}
console.log("sum:", sum)
let missing_num = expectedSum-sum
console.log("missing number:", missing_num)