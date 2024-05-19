var maxSlidingWindow = function(nums, k) {

    let l = 0, r = l+k-1;
    let ans = [];

    while(r<nums.length){
        let max = Number.NEGATIVE_INFINITY;

        for(let i=l; i<=r; i++){
            max = Math.max(max, nums[i]);
        }

        ans.push(max);
        l++;
        r++;
    }

    return ans;
    
};

let maxSlidingWindowOptimized = (nums, k)=>{

}

let arr = [1,-1];
console.log(maxSlidingWindowOptimized(arr, 1));