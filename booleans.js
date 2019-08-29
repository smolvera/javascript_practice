// --------- Scrimba Introduction to Javascript by Dylan Israel ---------- //
// 4. Booleans
/*
- booleans return true or false value
- 0 value returns a falsey value
- -5.1 returns a truthy value
*/ 

// Booleans and Boolean functions to evaluate true or false
let map  = true;

console.log(map); // returns true
console.log(Boolean(map)); // returns true

map = false;

console.log(map); // returns false
console.log(Boolean(map)); // returns false

// Truthy and Falsey values

map1 = 333;
console.log(Boolean(map1)); // returns true because true value

// --------------- Boolean Challenege ------------------- //
let example1 = false;
let example2 = true;
let example3 = null; // used when planning to define this later
let example4 = undefined; 
let example5 = '';
let example6 = NaN; // not a number
let example7 = -5;
let example8 = 0; // always falsey

console.log(Boolean(example1)); // output false
console.log(Boolean(example2)); //output true
console.log(Boolean(example3)); //output false
console.log(Boolean(example4)); //output false
console.log(Boolean(example5)); // output false
console.log(Boolean(example6)); // output false
console.log(Boolean(example7)); // output true
console.log(Boolean(example8)); // output false