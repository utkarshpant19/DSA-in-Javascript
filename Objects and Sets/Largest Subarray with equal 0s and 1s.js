
var findMaxLength = function (nums) {

    let maxLen = 0, sum = 0;

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {

        if(nums[i] == 1){
            sum+=1
        }
        else{
            sum-=1;
        }

        if(sum != 0){
            if(map.has(sum)){
                let len = i - map.get(sum);
                maxLen = Math.max(maxLen, len);
            }
            else
            map.set(sum , i);
        }
        else{
            maxLen = i+1;
        }

     
    }


    return maxLen;

};

let arr = [0,0,1,0,0,0,1,1];
console.log(findMaxLength(arr));