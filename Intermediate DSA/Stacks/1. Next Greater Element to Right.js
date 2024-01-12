let arr = [1,2,3,4,3];

const nge = (arr)=>{

    let stack = [], output = [];
    output[arr.length -1] = -1;
    stack.push(arr[arr.length -1]);
   
    for(let i= arr.length -2; i>=0; i--){

        const top = stack[stack.length -1];

        while(stack.length > 0 && top <= arr[i]){
            stack.pop();
        }

        if(stack.length == 0){
            output[i] = -1;
        }
        else{
            output[i] = stack[stack.length -1];
        }

        stack.push(arr[i]);
    }

    return output;

}

const output = nge(arr);
console.log(output);