const reverseArr = (arr)=>{


 return helper(arr, 0, arr.length -1);

}

const helper = (arr, start, end)=>{

    if(start == end){
        return arr;
    }
    swap(arr, start, end);
    return helper(arr, ++start, --end);
}

const swap = (arr, start, end)=>{
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}

let arr = [1,2,3,4,5];
console.log(reverseArr(arr));