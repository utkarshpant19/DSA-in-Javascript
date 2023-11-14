
const isPalindrome = (num)=>{

    let temp = num, rev = 0;

    while(temp > 0){

       
        let rem = temp % 10;
        rev = rev * 10 + rem;
        temp = Math.floor(temp/10);
    }

    return rev == num;

}

const isPalindromeRec = (num)=>{

    

}

console.log(isPalindromeRec(123));