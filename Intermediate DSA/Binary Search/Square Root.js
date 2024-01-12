var mySqrt = function(x) {

    let low =0, high = x;

    while(low < high){
        let mid = Math.floor(low + (high - low)/2);

        let square = mid * mid;

        if(square == x){
            return mid;
        }
        else if(square < x){
            low = mid +1;
        }
        else{
            high = mid -1;
        }
    }
    return high -1;
    
};

console.log(mySqrt(0));