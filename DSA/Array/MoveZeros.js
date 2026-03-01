// Move All Zeros to End

let arr = [0,1,0,3,12]
// Output: [1,3,12,0,0]

let moveZeroes = []

for(let i=0; i<arr.length; i++){
    if(arr[i] !== 0){
        moveZeroes.push(arr[i])
    }
}

for(let i=0; i<arr.length; i++){
    if(arr[i]===0){
        moveZeroes.push(arr[i])
    }
}

console.log(moveZeroes)