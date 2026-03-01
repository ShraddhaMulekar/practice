// Check Array is Sorted

let arr = [1,2,3,4]
// Output: true

isSorted = false

for(let i=0; i<arr.length; i++){
    if(arr[i] < arr[i+1]){
        isSorted = true
        break
    }
}
console.log(isSorted)