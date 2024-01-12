var decodeAtIndex = function(s, k) {

    let i =0;

    while(i< k-1){

    
        if(!s.match(/(\d+)/)){
            i++;
        }
        else{
            i = 2*i -1;
        }
    }

    return s[i];
    
};

let str = 'leet2code3', k = 10;

console.log(decodeAtIndex(str, k));