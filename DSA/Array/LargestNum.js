// Find Largest Element

let arr = [4, 7, 1, 9];
// Output: 9

let largest = -Infinity;

for(let num of arr){
    if(num > largest){
        largest = num
    }
}
console.log(largest)