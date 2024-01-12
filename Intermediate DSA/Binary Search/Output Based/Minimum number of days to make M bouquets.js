/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) { 

if(m * k > bloomDay.length){
        return -1;
    }

    // Range
    let start = 1, end = Math.max(...bloomDay);

    while(start < end){

        let mid = start + Math.floor((end - start)/2); 
        // mid represents days to make m bouquets,
        // If m bouquets can be made in mid days, then m bouquets can be made in
        // (m+1) days

        if(isFeasible(mid, bloomDay, m ,k)){
            end = mid; // Means we can reduce the number of days
        }
        else{
            start = mid +1; // means mid is too small to satisfy condtion
        }
    }

    return start;

    
};

function isFeasible(days, bloomDay, m, k){

 let flowers = 0, bouquets = 0;

// [1,10,3,10,2]
 for(let bloom of bloomDay){
     if(bloom > days){
         // Means it will take time , move to next day
         flowers = 0;
     }
     else{
         flowers += Math.ceil((bloom / k));;
         bouquets = bouquets + Math.floor(flowers/k);
         
     }
 }

 return bouquets >= m ? true : false;   
}

let arr = [1,10,3,10,2];
console.log(minDays(arr,3, 1));
