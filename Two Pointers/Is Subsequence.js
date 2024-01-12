
const isSubsequnce =(s, t)=>{

    if(s.length > t.length){
        return false;
    }

    // We'll use 2 pointer
// i pointer for s and j pointer for t

let i =0,j =0;

while(j< t.length && i < s.length){
    if(s[i] == t[j]){
        i++;
        j++;
    }
    else{
        j++;
    }
}
return i == s.length ? true : false;

}

console.log(isSubsequnce('aec', 'abcde'));