const minIncrementForUnique = (nums)=>{
      // First Sort the array 
      nums = nums.sort();

      let map = new Map();
      let increment = 0;
  
      for(let i=0; i<nums.length; i++){
  
          if(map.has(nums[i])){
              increment++; // We've to increase value by 1 atleast
              let increVal = nums[i] +1;
              while(map.has(increVal)){
                  increVal++;
                  increment++;
              }
              map.set(increVal, i);
          }
          else{
              map.set(nums[i], i);
          }
      }
  
      return increment;
  
}

let arr = [3,2,1,2,1,7];

console.log(minIncrementForUnique(arr));