
// Hamming distance is the count of two strings with equal number of characters

// Input: 'hello', 'hrllw'
// Output: 2

const hammingDistance = (str1, str2)=>{

    let count = 0;
    if(str1.length != str2.length){
       throw new Error('Strings must be of equal length')
    }

    for(let i=0; i<str1.length; i++){

        if(str1[i] != str2[i]){
            count++;
        }
    }
    return count;
}

const hammingDistanceBits = (num1, num2)=>{

    num1 = num1.toString(2);
    num2 = num2.toString(2);

    if(num1.length < num2.length){
        // Add 0's at the beginning

        while(num1.length != num2.length){
            num1 = "0"+num1;
        }
    }
    else if(num1.length > num2.length){
        // Add 0's at the beginning

        while(num1.length != num2.length){
            num2 = "0"+num2;
        }
    }

    let count = 0;
    for(let i=0; i<num1.length; i++){

        if(num1[i] != num2[i]){
            count++;
        }
    }
    return count;
}

console.log(hammingDistanceBits(5,2)); // 101, 010


// console.log(hammingDistance('Hello', 'Hrllw')); // Output: 2