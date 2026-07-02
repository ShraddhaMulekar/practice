// [10, 5, 8, 20] → 10

function secondLargest(arr){
    let max = -Infinity
    let secondMax = -Infinity
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            secondMax = max
            max = arr[i]
        } 
        // else if(arr[i]>secondMax && arr[i] !== max){
        //     secondMax = arr[i]
        // }
    }
    return secondMax
}
console.log(secondLargest([10, 5, 8, 20, 20]))