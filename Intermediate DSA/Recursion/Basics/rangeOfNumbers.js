// Create an array of given range

const createRange = (start, end)=>{

   // ans = [1,2,3,4,5]

   if(start > end){
    return [];
   }

   const arr = createRange(start+1, end);
     arr.unshift(start);
     return arr;
}

console.log(createRange(1,5));