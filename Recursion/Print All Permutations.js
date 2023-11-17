
const permutations = (arr)=>{

    let ans = [];

    getAllPermutations(arr, [], [], ans);
    return ans;
}

const getAllPermutations = (arr, ds, map,ans )=>{

    if(ds.length == arr.length){
        ans.push([...ds]);
        return;
    }


   for(let i=0; i<arr.length; i++){

    if(!map[i]){
        map[i] = true;
        ds.push(arr[i]); 
        getAllPermutations(arr, ds, map, ans);
        // When coming back from recursion, remove whatever you've added
        map[i] = false;
       ds.pop();
    }
   }
}

let arr = [1,2,3];
console.log(permutations(arr));