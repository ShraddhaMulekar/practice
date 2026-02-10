// Check array is sorted

// I/p → [1,2,3,4]
// O/p → true

let arr = [1,2,3,4]

let isSorted = true

for(let i=0; i<arr.length; i++){
    if(arr[i] > arr[i+1]){
        isSorted = false
        break
    } 
}
console.log(isSorted)