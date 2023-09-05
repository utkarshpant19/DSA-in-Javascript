
const palindromeNumber = (str)=>{

    // str = "121"
    let rev = str+"".split("").reverse().join("");
    console.log(rev);

    return str+"".split("").reverse().join("") === String(str);
}

console.log(palindromeNumber(41));