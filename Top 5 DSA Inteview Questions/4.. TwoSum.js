
// Q: Two Sum: Given an array of integers and an Integer target
        // Return indices of two numbers such that numbers add upto target

// Input: [2,4,5,9] , target: 6 => Output: 0,1
// Input: [3,2,4], target: 6 => output: 1,2

const twoSum = (nums, target)=>{

    // Brute Force

    const output = [];

    for(let i=0; i<nums.length -1; i++){
        
        for(let j=i+1; j<nums.length; j++){

            if(nums[i] + nums[j] == target){
                output.push(i);
                output.push(j);
            }
        }
    }

    return output;
}

const twoSumOptm = (nums,target)=>{

    const obj = {};

    for(let i=0; i<nums.length; i++){

        const curr = nums[i];
        if(obj[target - curr] >=0){
            return [obj[target - curr], i];
        }
        obj[curr] = i;
    }

}

console.log(twoSumOptm([3,15,2,4,11], 26));