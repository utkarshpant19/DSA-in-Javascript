
const palindromeNumber = (num)=>{

    let number = num.toString();

    return number < 0 ? false: num === +(number.split("").reverse().join(''));
}   

const isPalindrome = palindromeNumber(123);
console.log(isPalindrome);

