// Array Traversal

let arr = [1,5,6,8,2,4,-1]

for(let i=0; i<arr.length; i++){
    // console.log("i:", i)
    // console.log("arr[i]:", arr[i])
}

// Find Largest & Smallest
let lar = arr[0]
let small = arr[0]

for(let i=1; i<arr.length; i++){
    if(arr[i]>lar){
        lar = arr[i] 
    }
    if(arr[i] < small){
        small = arr[i]
    }
}
// console.log("largest:", lar)
// console.log("smallest:", small)

// Find Second Largest

let largest = -Infinity
let secondLargest = -Infinity

// for(let num of arr){
//     if(num > largest){
//         secondLargest = largest
//         largest = num
//     } else if(num > secondLargest && num !== largest){
//         secondLargest = num
//     }
// }

for(let i=0; i<arr.length; i++){
    if(arr[i] > largest){
        secondLargest = largest
        largest = arr[i]
    } else if(arr[i]>secondLargest && arr[i]!==largest){
        secondLargest = arr[i]
    }
}
console.log("second-Largest:", secondLargest)
console.log("Largest:", largest)