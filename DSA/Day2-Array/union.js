// Find union of two arrays

// I/p → [1,2,3], [3,4,5]
// O/p → [1,2,3,4,5]

let arr = [1,2,3]
let arr1 = [3,4,5]

let freq = {}
let union = []

for(let num of arr){
    if(!freq[num]){
        union.push(num)
        freq[num]=true
    }
}
console.log(union)

for(let num of arr1){
    if(!freq[num]){
        union.push(num)
        freq[num]=true
    }
}
console.log(union)