
// Output the second largest element in the array, Array can have duplicate elements

const arr = [10, 25, 35, 9, 35]; // Second largest: 25

// Algo: Make a set to have unique elements then convert from Set to Array then sort the array

const secondLargest = (arr) => {

    const unique = new Set(arr); // O(n)

    // Convert set to array
    const array = Array.from(unique);

    array.sort((a, b) => b - a); // Sorts in descending order O(nlogn)

    if (array.length > 1) {
        return arr[1];
    }
    else {
        return -1;
    }
}

// console.log(secondLargest(arr));
// Time Complexity: O(nLogn)
// Space Complexity: O(n) Creating a set of same size (n) then creating array out of it 

const secondLargestOptimized = (arr) => {

    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        // [10,25,35,9,35]
        
        //  sl: NI, 10, 25,
        //  l: 10, 25, 35
        
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }

        else if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }

    }

    return secondLargest;

    // TIME COMPLEXITY: O(n),
    // SPACE COMPLEXITY: O(1), returning single variable 
}

console.log(secondLargestOptimized([10, 25, 35, 9, 35]));