// Find maximum subarray sum

// I/p → [-2,1,-3,4,-1,2,1,-5,4]
// O/p → 6

let arr = [-2,1,-3,4,-1,2,1,-5,4]

let curSum = 0
let maxNum = -Infinity

for(let i=0; i<arr.length; i++){
    curSum += arr[i]

    if(curSum > maxNum){
        maxNum = curSum
    }

    if(curSum<0){
        curSum = 0
    }
}

console.log("max sub Array:", maxNum)