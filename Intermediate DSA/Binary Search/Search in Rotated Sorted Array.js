/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    // Find the index of the smalles value 
    let start =0, end = nums.length -1;

    let minIdx = minIndex(nums, start,end);

    if(minIdx == 0){
        return binarySearch(nums, start, end ,target);
    }
    else{

        let idx = binarySearch(nums, 0, minIdx -1, target);

        if(idx == -1){
            return binarySearch(nums, minIdx, nums.length -1, target);
        }

        return idx;
    }  
};

function minIndex(nums, start, end){
while(start < end){

        let mid = start + Math.floor((end - start)/2);

        if(nums[mid] >= nums[start] && nums[mid] <= nums[end]){
            return start;
        }

        if(nums[mid] < nums[start]){
            end = mid
        }
        else if(nums[mid] > nums[end]){
            start = mid+1;
        }
       
    }
    return start;
}

function binarySearch(nums, start, end , target){
    
    while(start <= end){
        let mid = start + Math.floor((end -start)/2);

        if(nums[mid] == target){
            return mid;
        }
        else if(nums[mid] > target){
            end = mid -1;
        }
        else
        start = mid+1;
    }

    return -1;
}

let nums = [4,5,6,7,0,1,2];
console.log(search(nums, 0));
