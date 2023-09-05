const largestSubarrayZeroSum = (arr)=>{

    let maxSubLen = 0;
for(let i=0; i<arr.length -1; i++){
    let sum = arr[i];
    for(let j =i+1; j<arr.length; j++){
        sum+=arr[j];
        if(sum == 0){
            maxSubLen = Math.max(maxSubLen, j-i +1);
        }
    }
}

return maxSubLen;

}

const largestSubarrayZeroSumOptimized = (arr)=>{

    let maxLen = 0,sum = 0;
    let map = new Map();

    for(let i=0; i<arr.length; i++){
        sum +=arr[i];

        if(sum == 0){
            maxLen = Math.max(maxLen, i+1);
        }
        else{

            // Check if sum exists in hashmap
            if(!map.has(sum)){
                map.set(sum, i);
            }
            else{
                // If sum already exists 
                let subLength = i - map.get(sum);
                maxLen = Math.max(maxLen, subLength);
            }
        }

      
    }

    return maxLen;
}

let arr  = [1, 3, -1, 4, -4];
// let arr  = [1,-1,3,2,-2,-8,1,7,10,23];
console.log(largestSubarrayZeroSum(arr)); // 5