
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const insertionSort = (arr)=>{

    for(let i=1; i<arr.length; i++){

        let j =i; 
        while(j> 0 && arr[j] < arr[j-1]){
            swap(arr, j, j-1);
            j--;
        }
    }

  

    return arr;



}

let arr = [5,3,1,0,4];

console.log(insertionSort(arr));