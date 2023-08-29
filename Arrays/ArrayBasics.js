let arr = [1,2,3,4,5];

// Looping in array

// 1) Map: returns new Array

let newArr = arr.map((item, idx, arr)=> item * 5);
console.log('Map array ', newArr);

// 2) Filter: Returns a new filtered array
newArr = arr.filter((item, idx, arr)=> item >3); // [4,5]
console.log('Filter Array ', newArr);

// 3) Reduce: returns a single item

const newItem = arr.reduce((prev, curr)=>{
return prev + curr;
}, 0)
console.log('Sum ', newItem);


// 4) some: Returns true if any of the items satifies condition
let isGreaterThanFour = arr.some((item) => item > 4); // true
console.log(isGreaterThanFour);

// 5) every: Returns true if all of the items satisfies condition
isGreaterThanFour = arr.every((item) => item > 4); // false
console.log(isGreaterThanFour);

// 6) find: Returns first item that satisfies the condition else undefined
let item = arr.find((item)=> item > 2); 
console.log(item); // 3
 item = arr.find((item)=> item > 20); 
 console.log(item); // undefined