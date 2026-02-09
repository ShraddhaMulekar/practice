// 1. Move all zeros to end

// I/p → [0,1,0,3,12]
// O/p → [1,3,12,0,0]

let arr = [0,1,0,3,12]

let result = []
for (let num of arr){
    if(num !== 0){
        result.push(num)
    }
}

for(let num of arr){
    if(num === 0){
        result.push(num)
    }
}

console.log(result)