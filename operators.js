// 7. Operators 
/* 
- = sets the value
- == checks the value and/or type for equality
- === checks the value and type for equality
*/ 
let add = 5 + 5;
console.log(add); // returns 10

let subtract = 6-5; 
console.log(subtract); // returns 1

let multiply = 6*5;
console.log(multiply); // returns 30

let divide = 10 / 5;
console.log(divide); // returns 2

// Modulous Operator
let modulous = 12 % 5 
console.log(modulous) // returns 2 

// ---------------- Relational Operators ------------------ //
let a = 11;
let b = 10 
console.log(a >= b); // returns true    
console.log(a <= b); // returns false
console.log(a == b); // returns false
console.log(a === b); // returns false
console.log(a !== b); // returns true
console.log(a != b); // returns true

// ---------- Equality ------------ //
let x = 2;
let y = '2';
console.log(x == y); // returns true
console.log(x === y); // returns false (checks type and value)