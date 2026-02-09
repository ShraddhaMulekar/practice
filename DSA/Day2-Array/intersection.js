// Find intersection of two arrays

// I/p → [1,2,3], [2,3,4]
// O/p → [2,3]

let arr1 = [1,2,3]
let arr2 = [2,3,4]
let result = []
for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
        if(arr1[i] === arr2[j]){
            result.push(arr1[i])
            break
        }
    }
}
console.log(result)