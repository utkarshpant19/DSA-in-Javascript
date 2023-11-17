
const permutations = (arr)=>{

    // arr = [1,2,3]
    /*
     Output: [
     [1,2,3], [1,3,2], 
     [2,1,3], [2,3,1],
     [3,1,2], [3,2,1]
    ]
    */



    let ans = [];

    getAllPermutations(arr, 0, ans);
    return ans;
}

const getAllPermutations = (arr, idx, ans )=>{

    if(idx == arr.length){
        ans.push([...arr]);
        return;
    }

    // We're trying every element at each index
    // So swap for 1st idx, swap everyone at 0th index
    for(let i=idx; i<arr.length; i++){
        swap(arr, i, idx);
        getAllPermutations(arr, idx+1, ans);
        swap(arr, i, idx); // Reswap it so it's state in maintained in backtracking
    }
  
}

let swap = (arr, i, j)=>{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [1,2,3];
console.log(permutations(arr));