
const printSubsequenceWithSumK = (arr, k)=>{

    return helper(arr, [], k, 0, 0);
}

const helper = (arr, subarr, k, i, sum)=>{

    if(i>= arr.length ){

        if(sum == k){
            console.log(subarr);
            return true;
        }
        return false;
    }

    // Picking ith idx in subsequence
    subarr.push(arr[i]);
    sum+=arr[i];

    if(helper(arr, subarr, k, i+1, sum)){
        return true;
    }
    subarr.pop();
    sum-=arr[i];

    if(helper(arr, subarr, k, i+1, sum)){
        return true;
    }
    return false;

}

let arr = [1,2,1];
printSubsequenceWithSumK(arr, 2);