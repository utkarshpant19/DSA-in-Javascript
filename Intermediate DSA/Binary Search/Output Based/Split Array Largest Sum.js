var splitArray = function(nums, k) {

    // Largest subarray can be min=> Largest number and max=> Sum of all numbers

    let start = Math.max(...nums);
    let end = nums.reduce((total, curr)=> {
        return total + curr;
    }, 0);

    while(start < end){

        let mid = start + Math.floor((end - start)/2);

        if(isSumLargeEnough(nums, mid, k)){
            end = mid;
        }
        else{
            start = mid +1;
        }
    }

    return start;
    
};

function isSumLargeEnough(nums, subarraySum, k){

    let total = 0, count = 1;

    for(let num of nums){
            total += num;

            if(total > subarraySum){
                total = num;
                count++;
            }   
    }

    return count > k ? false : true;
}