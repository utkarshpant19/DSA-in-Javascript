// Parameterized way
const factorial = (n)=>{

    return helper(1,n);

}

const helper = (fact, i)=>{

    if(i<1){
        return fact;
    }

    return helper(fact *i, i-1);

}

// console.log(factorial(5));

// Functional Way

const factorialFun = (n)=>{

    // factorial(n) = n * factorial(n-1);

    if(n == 0){
        return 1;
    }

    let facnm1 = factorialFun(n-1);

    return n * facnm1;

}

console.log(factorialFun(5));