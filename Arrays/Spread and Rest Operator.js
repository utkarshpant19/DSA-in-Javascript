
const nums1 = [1,2,3];
const nums2 = [4,5,6,7];

const nums3 = [...nums1, ...nums2]; // Spread Operator
console.log(nums3);

function sum(...nums){ // REST Operator


    console.log(nums);
}

sum(nums1,nums2, "hello", true); 