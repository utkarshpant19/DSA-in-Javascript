const mergeSort = (arr)=>{

// 1) Divide the array in two halves
// 2) Sort them individually
// 3) Merge Two sorted arrays
console.log('Before Sorting ',arr);
helper(arr, 0, arr.length -1);
console.log('After Sorting', arr);

}

const helper = (arr, low , high)=>{

    if(low >= high){
        return;
    }

    let mid = Math.floor((low + high)/2);

    helper(arr, low, mid); // Sort 1st half
    helper(arr, mid+1, high); // Sort Other half

    // Merge two sorted halves

    mergeTwoSortedArrays(arr, low, mid, high);
   
}

const mergeTwoSortedArrays = (arr, low, mid, high)=>{
     
    let i =low, j = mid+1;
    let merged = [];

    while(i<= mid && j<= high){

        if(arr[i] <= arr[j]){
            merged.push(arr[i]);
            i++;
        }
        else{
            merged.push(arr[j]);
            j++;
        }
    }

    while(i<= mid){
        merged.push(arr[i]);
        i++;
    }

    while(j<= high){
        merged.push(arr[j]);
        j++;
    }

    // Modify the original Array

    for(let i=low; i<= high; i++){
        arr[i] = merged[i - low];
    }
}

let arr = [9,8,7,6,5,4,3,2,1];
mergeSort(arr);