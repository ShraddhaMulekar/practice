// [1, 5, 3] → 5

function largestNumber(arr) {
    let max = arr[0]
    for(let i=1; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}

console.log(largestNumber([1, 5, 3]))