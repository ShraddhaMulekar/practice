// Find Frequency of Elements

let arr = [1,2,2,3,1]
// Output: {1:2,2:2,3:1}

const freq = {}

for(let num of arr){
    if(freq[num]){
        freq[num]++
    } else{
        freq[num] = 1
    }
}

console.log(freq)