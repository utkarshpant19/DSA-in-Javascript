
//  Concat(): Combines two or more arrays

const nums1 = [1,2,3];
const nums2 = [5,6,7,8];

const chars =['a', 'b', 'Hello'];

const ans = nums1.concat(nums2, chars);
console.log(ans);

// 2) slice(): returns Sliced part of array

const names = ['Utkarsh', 'Pant', 'Dashputra'];

let sliced = names.slice(0,2); // 2 is exclusive
console.log(sliced);
 
// Index can be (-ve)
sliced = names.slice(-1); // First element from last (Dashputra)
console.log(sliced); // Dashputra

sliced = names.slice(-2); // Second element from last, 
console.log(sliced);

//3)  Splice(): In Place, i.e. mutates original array

names.splice(1, 2, "Roger", "Nolan");
console.log(names);

// 4) fill(): Does changes in place, 

let dummy = [1,2,3,4,5]; 
dummy.fill(false); // Replaces every item in array with false
console.log(dummy);
dummy.fill(true, 2); // Replaces every item with true starting from 2 index
console.log(dummy);


// 5) findIndex():

let players = ['Roger', 'Rafa', 'Novak'];

let idx = players.findIndex((player) => player == 'Roger');
console.log(idx);

idx = players.findIndex((player)=> player == 'Andy');
console.log(idx);

// 6) flat

let person = ['Utkarsh', 'Pant', ['Rewa', 'Mumbai'], ['Uday Pant', ['Vishnu Pant']]];
let flattened = person.flat(); // 1 Level flattening
console.log(flattened);
flattened = person.flat(2);
console.log(flattened);

// 7) reverse()

let nums = [2,3,4,5,6];
console.log(nums.reverse());

// 8) sort(): Sorts an array in place


let unsorted = [20,1,4,32,53,4,6,];
let sorted = unsorted.sort((a,b)=> a-b); // a-b is (+ve), sorts in ascending sorted [b,a]
console.log(sorted);
sorted = unsorted.sort((a,b)=> b-a); // b-a is (-ve), sorts in descending order [a,b]
console.log(sorted);
