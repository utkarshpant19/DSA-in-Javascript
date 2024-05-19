var numSubarraysWithSum = function(nums, goal) {

return atMostGoal(nums, goal) - atMostGoal(nums, goal -1);
    
};

function atMostGoal(nums, goal){

    let left =0, subArrCount =0, sum =0;

    for(let right =0; right < nums.length; right++){

        sum += nums[right];

        while(sum > goal && left <= right){
            // Slide the window
            sum-=nums[left];
            left++;
        }
        subArrCount += (right -left +1);
    }

    return subArrCount;
}

let nums =[0,0,0,0,0], goal = 0;
console.log(numSubarraysWithSum(nums, goal));