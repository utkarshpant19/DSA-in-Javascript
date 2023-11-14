var shipWithinDays = function(weights, days) {

    // Defining the min and max weights can be delivered on ith day

    let start = Math.max(...weights);
    let end = weights.reduce((total, current)=>{
        return total + current;
    }, 0)

    while(start< end){

        let mid = start + Math.floor((end -start)/2);

        if(isFeasible(weights, mid, days)){
            end = mid;
        }
        else{
            start = mid +1;
        }
    }

    return start;
    
};

function isFeasible(weights, mid, days){

    let day = 1, total = 0;

    for(let weight of weights){
        total+=weight;

        if(total > mid){
            total = weight;
            day = day +1;
        }
    }

    if(day <= days){
        return true;
    }
    return false;
}

let weights = [3,2,2,4,1,4];
console.log(shipWithinDays(weights, 3));