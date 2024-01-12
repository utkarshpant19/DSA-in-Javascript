var singleNonDuplicate = function(nums) {

    // Since each element appears exactly twice expect 1,
    // Even idx element next element should be same
    // i.e arr[even] = arr[even +1]
    // because 0 is event, arr[0] == arr[1]

    // odd idx element previous element should be same
    // i.e. arr[odd] == arr[odd -1]
    // arr[1] = arr[0]

    let start = 0, end = nums.length -1;

    while(start < end){

        let mid = start + Math.floor((end - start)/2);

        if(mid %2 == 0){
            if(nums[mid] == nums[mid] +1){
            start = mid +2;
            }
            else
             end = mid;
        }
        else{
            // idx is odd

            if(nums[mid] == nums[mid -1]){
                start = mid +1;
            }
            else
            end = mid -1;
        }

    }

    return nums[start];
    
};

nums = [1,1,2,2,3];
console.log(singleNonDuplicate(nums));
