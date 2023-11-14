const printAllSubseqence = (arr)=>{

    helper(arr, 0, []);

}

const helper = (arr, i, subArr)=>{

    if(i >= arr.length){
        console.log(subArr);
        return;
    }
    
    // For every index we've a choice to take that index in subarry or not take 
    helper(arr, i+1, subArr);
    subArr.push(arr[i]);
    helper(arr, i+1, subArr);

    // Not take index
    subArr.pop();
   
   
}


let arr = [3,1,2];
printAllSubseqence(arr);