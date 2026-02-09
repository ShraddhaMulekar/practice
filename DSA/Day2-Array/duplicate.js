// Find duplicate elements

// I/p → [1,2,3,2,4,3]
// O/p → [2,3]

let arr = [1,2,3,2,4,3]

let duplicate = []
let remove_duplicate=[]
let seen = {}

for(let i=0; i<arr.length; i++){
    //find duplicate
    if(seen[arr[i]]){
        duplicate.push(arr[i])
    } else{
        seen[arr[i]] = true
    }
}

for(let num of arr){
    //remove duplicate
    if(!seen[num]){
        remove_duplicate.push(num)
        seen[num]=true
    }
}
console.log("duplicate:", duplicate)
console.log("remove duplicate:", remove_duplicate)