const fibonacci = (n)=>{

    // 10th Fibnonacci is 55

    if(n ==0 || n==1){
        return n;
    }


console.log('Pre '+n);
  let fibnm1 = fibonacci(n-1);
  console.log('In '+n);
  let fibnm2 = fibonacci(n-2);
  console.log('Post '+n);
  

  return fibnm1 + fibnm2;


}

console.log(fibonacci(3));