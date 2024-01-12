const nextSmallerToLeft = (arr)=>{

    let nse = [], stack = [];
    nse[0] = -1;
    stack.push(arr[0]);

    for(let i=1; i<arr.length; i++){

        while(stack.length > 0 && arr[i] < stack[stack.length -1]){
            stack.pop();
        }

        if(stack.length > 0){
            nse[i] = stack[stack.length -1];
        }
        else{
            nse[i] = -1;
        }
        stack.push(arr[i]);
    }
    return nse;

}

let arr = [4, 5, 2, 10, 8];
console.log(nextSmallerToLeft(arr));