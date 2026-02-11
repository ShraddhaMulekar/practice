// Find kth largest element

// I/p → [3,2,1,5,6,4], k=2
// O/p → 5
let arr = [3,2,1,5,6,4]
let k=2

let large = -Infinity
let kthLarge = -Infinity

for(let num of arr){
    if(num > large){
        kthLarge = large
        large = num
    } else if(num > kthLarge && num!==large){
        kthLarge = num
    }
}
console.log(kthLarge)