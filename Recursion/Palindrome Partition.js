const palindromePartition = (str)=>{

    let ans = [];

    getPalindromePartition(str, 0, [], ans);
   console.log(ans);

}

const getPalindromePartition = (str, idx, ds, ans)=>{

   if(idx == str.length){

    ans.push([...ds]);
    return;
   }
   
   for(let i=idx; i<str.length; i++){

    const partition = str.substring(idx, i+1);

    if(isPalindrome(partition)){
        ds.push(partition);
        getPalindromePartition(str, i+1, ds, ans);
        ds.pop();
    }
   }
}

const isPalindrome = (str)=>{

    let s = 0, end = str.length -1;

    while(s<end){

        if(str[s] == str[end]){
            s++;
            end--;
        }
        else
        return false;
    }
    return true;
}



let str = "aab";
palindromePartition(str);