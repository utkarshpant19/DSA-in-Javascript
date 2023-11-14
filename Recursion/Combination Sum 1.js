const combinationSum = (arr, target)=>{

    let ans = [];
    findCombinationSum(arr, target, 0, ans, []);

    return ans;
}

const findCombinationSum = (arr, target, idx, ans, ds)=>{

    // For every idx we've a choice to pick that idx or not pick

    if(target == 0){
        ans.push([...ds]);
        return;
    }

    if(idx == arr.length){

        if(target == 0){
            ans.push([...ds]);
        }
       
        return;
    }

    if(arr[idx] <= target){

        ds.push(arr[idx]);
        findCombinationSum(arr, target - arr[idx], idx, ans, ds);
        ds.pop();
    }
        // Do Not pick
        findCombinationSum(arr, target, idx+1, ans, ds);

}

let arr = [1,2], target = 3;
console.log(combinationSum(arr, target));