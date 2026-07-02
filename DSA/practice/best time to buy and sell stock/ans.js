// Input: prices = [7,1,5,3,6,4]
// Output: 5

let maxProfit = function(prices) {
    let min = prices[0]
    let maxpt = 0
    for(let i=1; i<prices.length; i++){
        if(min > prices[i]){
            min = prices[i]
        } else{
            if(prices[i]-min > maxpt){
                maxpt = prices[i]-min
            }
        }
    }
    console.log(maxpt)    
    return maxpt
};
maxProfit([7,1,5,3,6,4])