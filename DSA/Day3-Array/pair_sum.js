// Find pair with given sum

// I/p → [2,7,11,15], sum=9
// O/p → [2,7]


let arr = [3,2,7,6,11,15]
let sum=9

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        // console.log({j})
        if(arr[i] + arr[j] === sum){
            console.log([arr[i], arr[j]])
        }
        break //find fist pair
    }
}