const arrayOperations = (arr)=>{
    let sum = 0
    let max = arr[0]
    let min = arr[0]
    let even = 0; odd =0
    let unique = []
    let seen = {}
    let largest = -Infinity
    let secondLargest = -Infinity
    let isSorted = true
    let reverse = []

    for(let num of arr){
        //sum
        sum += num

        //max-min
        if(max < num) max = num
        if(max > num) max = num

        //even-odd
        if(num%2===0) {
            console.log("even", num)
            even++
        }
        else{ 
            console.log("odd", num)
            odd++
        }

        // unique
        if(!seen[num]){
            unique.push(num)
            seen[num] = true
        }

        // second-largest
        if(num > largest){
            secondLargest = largest
            largest = num
        } else if(num > secondLargest && num !== largest){
            secondLargest = num
        }

        
    }
    for(let i=0; i<arr.length; i++){
        //isSorted
        if(arr[i] < arr[i-1]){
            isSorted = false
            break
        }        
    }
    //reverse
    for(let i=arr.length-1; i>=0; i--){
        reverse.push(arr[i])        
    }

    console.log("Sum:", sum)
    let average = sum/arr.length
    console.log("Average:", average)
    console.log("Maximum:", max)
    console.log("Minimum:", min)
    console.log("Even:", even, "Odd:", odd)
    console.log("Minimum:", min)
    console.log("Unique:", unique)
    console.log("Largest:", largest)
    console.log("second-Largest:", secondLargest)
    console.log("Sorted:", isSorted)
    console.log("Reverse:", reverse)
}
arrayOperations([2, 5, 8, 10])