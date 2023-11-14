const multiply = (arr)=>{

    if(arr.length == 0){
        return 1;
    }
    console.log(arr);
    return arr[0] * multiply(arr.slice(1,arr.length));
}

let arr = [1,2,3,4,5];
console.log(multiply(arr));