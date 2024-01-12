var findPeakElement = function(nums) {

    let start =0, end = nums.length -1;

    while(start <= end){

        let mid = start + Math.floor((end - start)/2);

        if(nums[mid] > nums[mid -1] && nums[mid] > nums[mid +1]){
            return mid;
        }

       if(nums[mid] > nums[mid +1]){

           if(mid == 0 || (mid > 0 && arr[mid] > arr[mid -1])){
               return mid;
           }
           else
           end = mid -1;      
       }

       else if(mid > 0 && nums[mid] > nums[mid -1]){

           if(mid == nums.length -1 || nums[mid] > nums[mid +1]){
               return mid
           }
           else
            start = mid +1;
       }
       
    }

};
let nums = [1,2,1,3,5,6,4];

console.log(findPeakElement(nums));