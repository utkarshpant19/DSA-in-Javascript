
const name = 'Utkarsh Pant';
const age = 28;
const favorite = 'DSA';

const test = (name, age, favoriteSubject)=>{
    console.log(name, age, favoriteSubject);
}

test`Hello my name is ${name} I am ${age} years old. My favorite subject is ${favorite}`;

//*********     String Methods  ********************/

//1) replace and replaceAll()

let movie = "Oppenheimer";

console.log(movie.replace('p', 'm'));

// Joining 2 strings

let str = 'Hello';
str = str.concat(' World');
console.log(str);

// startsWith , endsWith

movie = 'The Dark Knight';

console.log(movie.startsWith('The'));
console.log(movie.endsWith('Knight'));

// Getting Parts of Strings

// substring() and slice()

let myName = 'Utkarsh Pant Dashputra';
console.log(myName.substring(13));
console.log(myName.slice(-5)); // -1 is first character from end

// Conversion

// primitives to String

let toBeConverted = 0;
console.log(String(toBeConverted));

// Converting Object to String

let obj = {name: 'Utkarsh'};
console.log(String(obj)); //'[object Object]'
console.log(JSON.stringify(obj));

// String to Object
console.log(JSON.parse(JSON.stringify(obj)));

// ASCII value from character

let player = 'Federer';
console.log(player.charCodeAt(0)); // F's  ASCII value = 70

// Getting Character from ASCII Code

console.log(String.fromCharCode(88)); 

// Compare two Strings

str = 'Hello';
let str2 = 'Hello';

console.log(str.localeCompare(str2)); // returns 0 if strings are equal , -1 if not
str2 = 'sdfsg';
console.log(str.localeCompare(str2));

// Split and Join()

let intro = 'My name is Utkarsh Pant';

console.log(intro.split(' ')); // String to array

let fruits = ['Apple', 'Orange', 'Banana'];
console.log(fruits.join(' ,'));


// toString

let a = 5;
console.log(a.toString()); // "5"

console.log(a.toString(2)); // 101