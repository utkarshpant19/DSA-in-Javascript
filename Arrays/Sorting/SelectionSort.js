

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const selectionSort = (arr)=>{
    
    // Find the index of min element, swap it with approriate idx

    for(let i =0; i<arr.length; i++){
        let minIdx = i;

        for(let j=i+1; j<arr.length; j++){
            if(arr[j] <arr[minIdx]){
                minIdx = j;
            }
        }

        if(minIdx != i){
            swap(arr, minIdx, i);
        }
    }



    return arr;

}

let arr = [5,4,6,2,1];
console.log(selectionSort(arr));