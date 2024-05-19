const fruitsIntoBasket = (fruits)=>{

    // [1,2,3,2,2]
    let l=0, len =0, maxSubLen = 0;
    let map = new Map();

  for(let r =0; r< fruits.length; r++){


    map.set(fruits[r], (map.get(fruits[r]) + 1) || 1);
    len++;

    // If Window is invalid
    while(map.size > 2){

        // Get the value of the left pointer
        const value = map.get(fruits[l]);
        map.set(fruits[l], value -1);
        len--;

        if(map.get(fruits[l]) == 0){
            map.delete(fruits[l]);
        }
        l++;
    }

    maxSubLen = Math.max(maxSubLen, len);
  }

    return maxSubLen

}

const fruits = [1,2,3,2,2];
console.log(fruitsIntoBasket(fruits));