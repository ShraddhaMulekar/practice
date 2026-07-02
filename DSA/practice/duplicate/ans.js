// Input: nums = [1,2,3,1]
// Output: true

let containsDuplicate = function(nums) {
    let sortNums = nums.sort((a,b)=>a-b)
    let left = 0
    let right = 1
    while(right<sortNums.length){
        if(sortNums[left] === sortNums[right]){
            return true
        }
        left++
        right++
    }
    return false
};
console.log(containsDuplicate([1,2,3,1])) // true
console.log(containsDuplicate([1,2,3,4])) // false