const kthPermutation = (n,k)=>{

    // n = 3, k = 4
    // Total Permuations [1-n]
    // 123, 132, 213,231, 312,321
    // kth Permutation: 231

        let nums = [];
    for(let i=1; i<=n; i++){
        nums.push(i); // 1,2,3
    }

   
    let ans = []; // This will contain all Permutations
    getAllPermutations(nums, 0, ans);
    ans.sort((a,b)=> a-b);

    return ans[k-1];
}


const getAllPermutations = (nums, idx, ans)=>{

    if(idx == nums.length){
        ans.push([...nums].join(''));
        return;
    }

    for(let i=idx; i<nums.length; i++){

           swap(nums, idx, i)
            getAllPermutations(nums, idx+1, ans);
            swap(nums, idx, i);
               
    }
}

const swap = (nums, i, j)=>{
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

const k = kthPermutation(3,5);
console.log(k);