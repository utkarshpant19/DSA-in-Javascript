// Parametrised Way
const sum = (n)=>{

    return helper(n,0);
}

const helper = (i, sum)=>{

    if(i<1){
        return sum;
    }
    return helper(i-1, sum+i);
}

// console.log(sum(10));

// Functional Way

const sumFun = (n)=>{

    // Sum of first n numbers => f(n) = n + f(n-1)

    if(n == 0){
        return 0;
    }
    let fnm1 = sumFun(n-1);

    return n + fnm1;
}

console.log(sumFun(10));