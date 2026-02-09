// Find frequency of elements

let arr = [1,2,2,3,3,3]
// O/p → {1:1, 2:2, 3:3}

let freq = {}
for(let num of arr){
    if(freq[num]){
        freq[num]++
    } else{
        freq[num]=1
    }
}
console.log({freq})