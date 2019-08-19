// --------- Scrimba Introduction to Javascript by Dylan Israel ---------- //
// 1. Variable key words: var (deprecated), let, const 
/* 
- variables allow you to store values
- var is deprecated
- let allows you to reassign values
- const does not allow you to reassign values
*/ 

var example = true;
console.log(example); // returns true

let name = "Samantha"
console.log(name); // returns Samantha

name = "Olvera"
console.log(name); // returns Olvera

const age = 20;
console.log(age); // returns 20

age = 35;
console.log(age); // returns uncaught type error