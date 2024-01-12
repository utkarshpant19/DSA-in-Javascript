

const NByThreeMajorityElement = (nums)=>{

    // Moore's voting algorithm, At any point if count is 0, change the desired element
    let nBy3 = 0, count = 0;

    for(let i=0; i<nums.length; i++){

        if(count == 0){
            nBy3 = nums[i];
        }
        if(nums[i] == nBy3){
            count++;
        }
        else
        count--;
    }
    count = 0;

    for(let i=0; i<nums.length; i++){

        if(nums[i] == nBy3){
            count++;
        }
    }

    return count > nums.length/3 ? nBy3 : -1;
}

let arr = [10, 10, 20, 30, 30, 40]
console.log(NByThreeMajorityElement(arr));