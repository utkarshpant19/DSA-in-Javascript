
var checkInclusion = function(s1, s2) {

    if(s1.length > s2.length){
        return false;
    }

 // We need a window of size s1 to check inside s2
 let i=0, j= s1.length;

 while(j <= s2.length){
     let str = s2.substring(i, j);
    if(checkAnagram(str, s1)){
        return true;
    }
     i++;
     j++;
 }

    return false;
    
};

function checkAnagram(s1, s2){

    let obj1 = {};
    let obj2 = {};

    for(let i=0; i<s1.length; i++){
        obj1[s1[i]] = (obj1[s1[i]] || 0) + 1;
        obj2[s2[i]] = (obj2[s2[i]] || 0) + 1;
    }

    for(let key in obj1){
        if(obj1[key] == obj2[key]){
            return true;
        }
    }
    return false;
}

let s1 = 'ab', s2="eidboaoo";
console.log(checkInclusion(s1, s2));