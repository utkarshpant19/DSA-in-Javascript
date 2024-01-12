var minEatingSpeed = function(piles, h) {

    let start =1, end = Number.MIN_VALUE;

    for(let num of piles){
        if(num > end){
            end = num;
        }
    }

    while(start <= end){

        let mid = start + Math.floor((end - start)/2);

        let hrsTaken = 0;

        for(let pile of piles){
            hrsTaken += Math.ceil(pile/mid);
        }

        if(hrsTaken > h){
            start = mid +1;
        }
        else if(hrsTaken < h){
            end = mid -1;
        }
    }

    return start;
    
};


let piles = [1,1,1,999999999], h = 10
console.log(minEatingSpeed(piles, h));

