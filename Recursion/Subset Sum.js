const substSum = (arr)=>{

    // Return all subset of array . Total number of subsets = 2^n

    let ans = [];
    arr.sort((a,b)=> a-b);
    getSubsetSum(arr,0, 0, ans);
    console.log(ans);

}

const getSubsetSum = (arr, idx,  sum, ans)=>{

    // For every idx we've a choice to pick that element as part of subset or not pick

    if(idx >= arr.length){
        ans.push(sum);
        return;
    }

// Pick idx
    getSubsetSum(arr, idx+1, sum+arr[idx], ans);

    // Not pick Index
    getSubsetSum(arr, idx+1, sum, ans)
}

let arr = [3,1,2];
substSum(arr, 0)