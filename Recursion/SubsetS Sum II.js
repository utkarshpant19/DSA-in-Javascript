
const subsetSum2 = (arr)=>{

    arr.sort((a,b)=> a-b);

    let ans = [];
    getSubsetSum(arr, 0, [],  ans);
    return ans;

}

const getSubsetSum = (arr, idx, ds, ans)=>{

    ans.push([...ds]);
    if(idx == arr.length){
        return;
    }

    // For every idx we can pick idx to arr.length -1 as our ith element of subset

    for(let i=idx; i<arr.length; i++){
       

        if(i > idx && arr[i] == arr[i -1]){ // To avoid non-repeating subsets
            continue;
        }
        ds.push(arr[i]);
        getSubsetSum(arr, i+1, ds, ans);
        ds.pop();
    }
}

let arr = [1,2,2];
console.log(subsetSum2(arr)); // [ [], [1], [2], [1,1], [1,2], [1,2,1]] All non repeative subsets