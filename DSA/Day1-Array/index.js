//1. Array Traversal

let arr = [1,5,6,8,2,4,-1,5,6,8,9]
// let arr = [1,2,3]


for(let i=0; i<arr.length; i++){
    // console.log("i:", i)
    // console.log("arr[i]:", arr[i])
}

//2. Find Largest & Smallest
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

//3. Find Second Largest

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
// console.log("second-Largest:", secondLargest)
// console.log("Largest:", largest)


//4. Reverse an Array
let x = []
for(let i = arr.length-1; i >= 0; i-- ){
    x.push(arr[i])
}
// console.log("Reverse-Array:", x)


//5. Check if Array is Sorted
let isSorted = true
for(let i=1; i<arr.length; i++){
    if(arr[i]<arr[i-1]){
        isSorted = false
        break
    }
}
// console.log(isSorted)

//6. Count Even & Odd

let even = 0; odd = 0
for(let i=0; i<arr.length; i++){
    // if(arr[i]%2==0) {
    //     even++
    // }
    // else {
    //     odd++
    // }
    (arr[i]%2==0) ? even++ : odd++
}
// console.log("Even:", even, "Odd:", odd)


//7. Sum & Average

let sum =0

for(let num of arr){
    sum += num
}
let avg = sum/arr.length
// console.log("sum:", sum, "average:", avg)

//8. Remove Duplicates
let unique = []
let seen = {}
for(let num of arr){
    if(!seen[num]){
        unique.push(num)
        seen[num]=true
    }
}
console.log(unique)