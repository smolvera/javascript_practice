// --------- Scrimba Introduction to Javascript by Dylan Israel ---------- //
// 3. Numbers
/* 
- no quotes needed
*/ 

let number = 25;

console.log(number) // returns 25

// typeof key word
console.log(typeof number) // returns number

// parseInt returns a whole number value

let number1 = 25.6749

console.log(parseInt(number1)) // returns 25

// parseFloat returns the decimal
console.log(parseFloat(number1)) // returns 25.6749

let number2 = '16.7563';
console.log(parseFloat(number2)); // retuns 16.7563 (number value, not string)
console.log(parseInt(number2)); // returns 16 (number value, not string)

console.log(number1.toFixed()) // returns 26 (rounds number up to the nearest whole number)
console.log(number1.toFixed(2)) // returns 25.67 (2 decimals, rounded)

// Numbers Challenge:
// Guess the output of the return values for the following: (Javascript's wierd results) 

let example1 = parseInt("3 World 5");
let example2 = parseFloat("6 College 2 Highschool");
let example3 = 33.3333.toFixed(7);
let example4 = 100.3.toFixed(1);

console.log(example1); // returns 3
console.log(example2); // returns 6
console.log(example3); // returns 33.3333000
console.log(example4); // returns 100.3

console.log(typeof example1); // number
console.log(typeof example2); // number
console.log(typeof example3); // string (bc converts to a string when manipulating)
console.log(typeof example4); // string (bc converts to a string when manipulating)