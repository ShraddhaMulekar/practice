// Find all pairs with given sum

// I/p → [1,5,7,-1], sum=6
// O/p → [[1,5],[7,-1]]

let arr = [1,5,7,-1]
let sum=6
let result = []
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i] + arr[j] === sum){
            result.push([arr[i], arr[j]])
        }
    }
}
console.log(result)