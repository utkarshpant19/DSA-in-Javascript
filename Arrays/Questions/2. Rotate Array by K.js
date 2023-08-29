
// Given an array of Integers, rotate array by k steps

// Input: [1,2,3,4,5,6,7,8], k = 3
// Output: [6,7,8,1,2,3,4,5]


// Soln 1: Using Raw Algorithm
const rotateArr = (arr, k)=>{
    
    if(k < 0){
        k = arr.length +1;
    }
    k = k % arr.length;
   
  
    reverse(arr, 0, arr.length -1); // Reverse the whole Array
    reverse(arr, 0, k-1); // Reverse Part 1
    reverse(arr, k, arr.length -1); // Reverse Part 2

    return arr;
}

const reverse = (arr, fi, li)=>{

    while(fi <= li){
        let temp = arr[fi];
        arr[fi++] = arr[li];
        arr[li--] = temp;
    }
}

// console.log(rotateArr([1,2,3,4,5,6,7,8], -1));

// Soln 2: Using Built in JS Function

// Input: [1,2,3,4,5,6,7,8], k = 3

// Remove the last 3 elements from array and add it to the beginning

const rotateArray = (arr, k)=>{

    k = k% arr.length;

    if(k < 0){
        k = arr.length +k;
    }

    const kElements = arr.splice(arr.length - k, k); // Modifies original array, and returns chopped array
    // Add it tot the beginning
    arr.unshift(...kElements); // Add chopped elements at the start

    return arr;
}

console.log(rotateArray([1,2,3,4,5,6,7,8], 6));

