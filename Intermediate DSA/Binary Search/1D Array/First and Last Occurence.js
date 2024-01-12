var searchRange = function(nums, target) {

    let first = getFirstOccurence(nums, target);
    let last = getLastOccurence(nums, target);

    return [first, last];
    
};

function getFirstOccurence(nums, target){

    let first = -1;

    let start =0, end = nums.length -1;

    while(start <= end){

        let mid = start + (end - start)/2;

        if(nums[mid] == target){
            first = mid;
            end = mid -1;
        }
        else if(nums[mid] > target){
            end = mid -1;
        }
        else
        start = mid +1;
    }
    return first;

}
function getLastOccurence(nums, target){

    let last = -1;

    let start =0, end = nums.length -1;

    while(start <= end){

        let mid = start + (end - start)/2;

        if(nums[mid] == target){
            last = mid;
            start = mid+1;
        }
        else if(nums[mid] > target){
            end = mid -1;
        }
        else
        start = mid +1;
    }
    return last;

}

let nums = [5,7,7,8,8,10]
let target = 8;
console.log(searchRange(nums, target));