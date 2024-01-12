
var reverseString = function(s) {

    reverse(s, 0, s.length-1);
    
};

const reverse = (s, start, end)=>{

    if(start >= end){
        return;
    }
    swap(s, start, end);
    reverse(s,start+1, end-1);
}