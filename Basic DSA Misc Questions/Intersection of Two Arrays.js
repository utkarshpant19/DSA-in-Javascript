
var intersection = function(nums1, nums2) {

    // Return the common elements
  
    // Create a hashmap of values and its count
    // Then check if key exists in second array
  
    let map = new Map();
    let output = [];
  
    for(let i=0; i<nums1.length; i++){
      map.set(nums1[i], map.get(nums1[i]) +1 || 1)
    }
  
   for(let key of map.keys()){
  
     for(let i=0; i<nums2.length; i++){
       if(key == nums2[i]){
         output.push(key);
         break;
       }
     }
     
   }
  
    return output;
    
      
  };

  let nums1 = [4,9,5], nums2 = [9,4,9,8,4];
  console.log(intersection(nums1, nums2));