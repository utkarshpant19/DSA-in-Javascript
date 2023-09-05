
const removeDuplicates = (str)=>{

    let obj = {};

    for(let i =0; i<str.length; i++){
        obj[str[i]] = obj[str[i]] +1 || 1;
    }

    let output ='';

    for(let char in obj){
        output+=char+obj[char];
    }

    return output;

}

console.log(removeDuplicates("aaabbccccd")); 