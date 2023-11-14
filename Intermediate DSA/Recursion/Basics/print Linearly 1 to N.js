const print = (n)=>{

    return helper(1, n);
}

function helper(i, n){

    if(i>n){
        return;
    }
    console.log(i);
    helper(i+1, n);
}

const printBackTrack = (n)=>{

    if(n == 1){
        console.log(n);
        return;
    }
    console.log(printBackTrack(n-1));
}

console.log(printBackTrack(5));

