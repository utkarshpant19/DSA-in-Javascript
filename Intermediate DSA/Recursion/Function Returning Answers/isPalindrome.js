
const isPalidrome = (str)=>{

    return helper(str, 0);
  
}

const helper = (newStr, start)=>{

    if(start >= Math.floor(newStr.length/2)){
        return true;
    }

    let end = newStr.length -1-start;
    if(newStr[start] != newStr[end]){
        return false;
    }
    return helper(newStr,start+1);

}


let str = "abcba";
console.log(isPalidrome(str));