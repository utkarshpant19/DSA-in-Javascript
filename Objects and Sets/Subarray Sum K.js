var subarraySum = function(nums, k) {

    let subArrCount = 0;
    let prefixSum = 0;

    let map = new Map();

    for(let i=0; i<nums.length; i++){

        prefixSum +=nums[i];

        if(prefixSum == k){
            subArrCount++;
        }
        if(map.has(prefixSum - k)){
            let val = map.get(prefixSum - k);
            subArrCount+=val;
        }

        let val = map.get(prefixSum);
        map.set(prefixSum, ( val+1) || 1);
    }



    return subArrCount;
    
};

let arr = [0,0,0,0,0];
console.log(subarraySum(arr, 0));