// Rotate array by K positions

// I/p → [1,2,3,4,5], k=6
// O/p → [3,4,5,1,2]
//0=[5,1,2,3,4]
//1= [4,5,1,2,3]
//2=[3,4,5,1,2]
//3=[2,3,4,5,1]
//4=[1,2,3,4,5]
//5=[5,1,2,3,4]
//6=[4,5,1,2,3]
//7=[3,4,5,1,2]



let arr = [1,2,3,4,5]
let k=2
let output = []
let len = arr.length
let rem = k%len
console.log(len, rem)

for(let i=rem; i<arr.length; i++){
    output.push(arr[i])
}
for(let i=0; i<rem; i++){
    output.push(arr[i])
}
console.log("output:", output)