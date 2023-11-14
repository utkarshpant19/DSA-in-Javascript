const combinationSum2 = (arr, target)=>{

arr.sort((a,b)=> a-b);
let ans = [];
    getCombinationSum(arr, target, 0, [], ans);
    return ans;
}

const getCombinationSum = (arr, target, idx,ds, ans)=>{

    if(target == 0){
        ans.push([...ds]);
        return;
    }

    for(let i=idx; i<arr.length; i++){

        if(arr[i] > target){
            break;
        }
        if(i> idx && arr[i] == arr[i-1]){
            continue;
        }

        ds.push(arr[i]);
        getCombinationSum(arr, target - arr[i], i+1, ds, ans);
        ds.pop();
    }
}

let arr = [10,1,2,7,6,1,5], target = 8;

console.log(combinationSum2(arr, target));