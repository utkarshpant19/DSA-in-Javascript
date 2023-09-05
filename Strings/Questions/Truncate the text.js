
// Write a function truncate() that checks the length of the given string, and if it surpasses 
// maximum length, it replaces the end of the string with ellipsis character (...)

// Input: Roger Federer, 7 (maxlength)
// Output: Roger F...

const truncate = (str, maxLength)=>{

    if(str.length <= maxLength){
        return str;
    }

    str = str.slice(0, maxLength);
    return str+"..."
}

console.log(truncate('Roger Federer', 7));