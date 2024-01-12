const palindromePartition = (str)=>{

let ans = [];

    getPalindromePartition(str, 0, [], ans);
    return ans;
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

    let l =0, r = str.length -1;

    while(l<r){

        if(str.charAt(l) != str.charAt(r)){
            return false;
        }
        l++;
        r--;
    }
    return true;
}

console.log(palindromePartition("aab"));