
// Given an array of Integers sorted in Non Decreasing order,
// Remove the duplicates In Place such that each unique element appears only once
// The relative order of the elements should be kept same then return the `number` of unique elements in nums

// Input: [1,1,2] => 
//Output: 1, [1,2]

// Input: [0,0,1,1,1,2,2,3,3,4,4,4,4]: 
// Output: 5 [0,1,2,3,4..]

// Method 1: Using Set
const removeDuplicates = (arr) => {
    console.log('Array ', arr);
    let unique = new Set(arr);
    arr = Array.from(unique); // O(n)

    console.log('Array ', arr);
    return arr.length;
}

// Space Complexity: O(n) : Not accepted




// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4,4,4,4]));

const removeDuplicates2 = (arr) => {

    // Create an object, store each element as key value repairs , ignore repeated elements

    let obj = {};

    for (let i = 0; i < arr.length; i++) {

        if (!obj.hasOwnProperty(arr[i])) {
            obj[arr[i]] = i;
        }
    }
    console.log(obj);

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    return Object.keys(obj).length;
}

// console.log(removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4]));

// Method 3: Since array is sorted, we can check whether next element is same as current

const removeDuplicatesInPlace = (arr)=> {

    for(let i =0; i<arr.length; i++){

        if(arr[i] == arr[i+1]){
            arr.splice(i+1, 1); // Remove next element
            i--;
        }
    }
    return arr.length;
}

console.log(removeDuplicatesInPlace([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4]));
// Time Complexity: O(n)
// Space Complexity: O(1)

// Method 4: Without using Inbuild JS Function (Using Two Pointer)

const removeDuplicatesTwoPointer = (arr)=>{

    // The idea is to move all the unique elements to the start

    let i =0; 

    for(let j=1; j<arr.length; j++){

        if(arr[i] != arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}

console.log(removeDuplicatesTwoPointer([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4]));


