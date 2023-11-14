const combinationSum = (arr, target) => {
    let ans = [];
  getCombinationSum(arr, target, 0, [], ans);
  console.log(ans);
};

const getCombinationSum = (arr, target, idx, ds, ans) => {
  if (target == 0) {
    ans.push([...ds]);
    return;
  } else if (idx == arr.length) {
    if (target == 0) {
      ans.push([...ds]);
    }
    return;
  }

  // For every idx, we've a choice to pick idx or not pick index

  if (arr[idx] <= target) {
    ds.push(arr[idx]);
    getCombinationSum(arr, target - arr[idx], idx,  ds, ans);
    ds.pop();
  }
  // Not pick index
  getCombinationSum(arr, target, idx + 1, ds, ans);
};

let arr = [1, 2],
  target = 2;
combinationSum(arr, target);
