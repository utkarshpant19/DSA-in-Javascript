var minimumSwap = function(s1, s2) {
    let x1 = 0; // Number of x mismatched in s1
    let y1 = 0; // Number of y mismatched in s1
    let x2 = 0; // Number of x mismatched in s2
    let y2 = 0; // Number of y mismatched in s2

    for(let i=0; i<s1.length; i++){
        

        let chS1 = s1[i];
        let chS2 = s2[i];

        if(chS1 == chS2){
            continue;
        }

        if(chS1 == 'x'){
            x1++;
        }
        else{
            y1++;
        }

        if(chS2 == 'x'){
            x2++;
        }
        else{
            y2++;
        }
    }

    // x1 and x2 should be equal in numbers, same with y1 and y2

    if((x1+x2) %2 !=0 || (y1 +y2)%2 !=0 ){
        return -1;
    }

    // There are two cases of mismatch
    // Case 1: For 1 swap
    // xx : No of pairs of x1 and y1 
    // yy
    // i.e. x1/2 + y1/2

    // Case 2: For 2 swap
    // xy: 
    // yx: No of x or y in s1 is odd
    // (x1%2) *2

    let swaps = Math.floor(x1/2) + Math.floor(y1/2) + (x1%2)*2 ;

    return swaps;

};

let str1 = 'xy', str2 = 'yx';
console.log(minimumSwap(str1, str2));