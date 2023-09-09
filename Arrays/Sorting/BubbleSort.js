const bubbleSort =(arr)=>{

// If right < left, then swap
// TC: O(n^2)
// SC: O(1), In place sorting

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

for(let i=0; i<arr.length -1; i++){
  
    for(j=0; j<arr.length -i -i; j++){
        if(arr[j] > arr[j+1]){
            swap(arr, j, j+1);
        }
    }
}

return arr;

    
}

let arr = [5,3,1,0,4];

console.log(bubbleSort(arr));

