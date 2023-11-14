
const countSubsWithSumK = (arr, k)=>{

    return helper(arr, k, 0, 0);
}

const helper = (arr, k , i, sum)=>{


    if(i == arr.length){

     return sum == k ? 1 : 0;
    }

    sum+=arr[i];
    const left = helper(arr, k, i+1, sum);
    sum-=arr[i];
    const right = helper(arr, k, i+1, sum);

    return left + right;
}

let arr = [1,2,1], k = 2;
console.log(countSubsWithSumK(arr, k));