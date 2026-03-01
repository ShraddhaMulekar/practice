// Find Smallest Element

let arr = [4, 7, 1, 9];
// Output: 1

let smallest = Infinity

for(let num of arr){
    if(num < smallest){
        smallest =num
    }
}
console.log(smallest)