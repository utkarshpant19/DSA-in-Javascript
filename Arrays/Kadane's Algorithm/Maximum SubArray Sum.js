
// Maximum subarray Sum

// I/P: [2,1,-3, 4,-1, 2,1,-5,4] => Output: 6 [4,-1,2,1]

const maximumSubArraySum = (arr)=>{

    let maximum = 0;
    let startIndex =0, endIndex = 0;
   

    for(let i =0; i<arr.length; i++){

        let sum = 0;
        for(let j =i; j<arr.length; j++){
            sum += arr[j];
            if(sum > maximum){
                maximum = sum;
                startIndex = i;
                endIndex = j;

            }
        }
    }

    return {maximum: maximum, subArray: arr.slice(startIndex, endIndex +1)};

    // Brute Force Solution: 
    // TC: O(n^2)
    // SC: O(1)
}

// console.log(maximumSubArraySum([2,-1,-3, 4,5 ,-5] ));

const maxSubArraySumOptimized = (arr)=>{

    // Kadane's Algorithm: While calculating subarray sum, if at any point the sum becomes -ve, drop that subarray

    let sum = 0, maximumSum = arr[0];
    let startIdx =0, endIndex = 0;

    for(let i=0; i<arr.length; i++){

        sum+=arr[i];

        if(sum > maximumSum){
            maximumSum = sum;
            endIndex = i;
        }
        else if(sum < 0){
            sum = 0;
            startIndex = i+1;
        }
    }

    return {maximum: maximumSum, subArray: arr.slice(startIdx, endIndex +1)};
}

console.log(maxSubArraySumOptimized([-2,-1,-3, -4,-1, -2,-1,-5,-4]));

