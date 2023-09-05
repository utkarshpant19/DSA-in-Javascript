
var subarraysDivByK = function(nums, k) {

    let subArrCount = 0;
    for(let i =0; i<nums.length; i++){
        let sum = 0;
        for(let j=i; j<nums.length; j++){

            sum+=nums[j];
            if(sum % k == 0){
                subArrCount++;
            }
        }

        
    }

    return subArrCount;
    
};

let subarraysDivByKOptimized = function(nums, k) {

    let map = new Map();
    let sum =0;
    map.set(sum, 1);
    let subArrayCount = 0;

    for(let i=0; i<nums.length; i++){

        sum+=nums[i];

        if(sum <0){
            sum +=k;
        }
       let rem = sum%k;

       if(map.has(rem)){
           let value = map.get(rem);
           subArrayCount+=value;
           map.set(rem, value +1);
       }
       else{
        map.set(rem, 1);
       }

    }

    return subArrayCount;
    
};

let nums = [4,5,0,-2,-3,1];
console.log(subarraysDivByKOptimized(nums, 5));