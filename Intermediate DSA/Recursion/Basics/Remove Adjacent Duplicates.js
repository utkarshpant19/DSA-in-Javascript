/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {

    let i = 0;

    while(i<s.length){

        if(s[i]== s[i+1]){
           let strArr =  s.split('');
           strArr.splice(i, 2);
            removeDuplicates(strArr.join(''));
        }
        i++;
    }

    return s;

    
};

let str = "abbaca";
console.log(removeDuplicates(str));