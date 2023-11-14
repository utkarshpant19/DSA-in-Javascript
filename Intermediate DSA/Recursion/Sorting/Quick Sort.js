const quickSort = (arr)=>{

    helper(arr, 0, arr.length -1);
    console.log(arr);
}

const helper = (arr, low, high)=>{

    // Take any element as pivot (let starting element as pivot )
    // Put Pivot at it's correct pos
    // Everything on the left is smaller than pivot, Everything on right is greater than pivot


    if(low < high){
        let pivotIdx = getPivotIdx(arr, low, high);
        helper(arr, low, pivotIdx-1);
        helper(arr, pivotIdx+1, high);
    }
   
}

const getPivotIdx = (arr, low, high)=>{

    // Use Two pointer, 
    let i=low, j= high;
    let pivot = arr[low];

    while(i<j){

        while(arr[i] <= pivot && i< high){
            i++;
        }

        while(arr[j] > pivot && j>low){
            j--;
        }

        if(i<j){
            swap(arr, i, j);
        }
    }
        swap(arr, low, j);
        return j;
   
}

const swap = (arr, i, j)=>{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [9,8,7,6,5,4,3,2,1];
quickSort(arr);


