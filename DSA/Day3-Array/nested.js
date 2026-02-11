// Flatten nested array

let arr = [1,[2,[3,4]],5]
// O/p → [1,2,3,4,5]

let nested = arr.flat(2)

console.log(nested)