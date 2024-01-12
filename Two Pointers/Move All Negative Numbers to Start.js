const moveNegativeNumbersToStart = (arr)=>{

    let positiveCount = 0;

    for(let i =0; i<arr.length; i++){

        if(arr[i] >=0){
            positiveCount++;
        }
        else{
            // swap i with left most positive number
            swap(arr, i, i - positiveCount);
        }
    }

    return arr;
}

const swap = (arr, i, j)=>{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [1,2,-3,4,-4,-5];

console.log(moveNegativeNumbersToStart(arr));