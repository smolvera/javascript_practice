// --------- Scrimba Introduction to Javascript by Dylan Israel ---------- //
// 5. Arrays

/* 
- start on the 0 index 
- arrays are wrapped in brackes: []
- over 20 - 25 methods for arrays
*/ 

// Instantiating an Array 
let array1 = ["a", "b", "c", "d"];

console.log(array1);
console.log(array1.length); //output: 4

// Get First or 3rd value
console.log(array1[0]); //output: a
console.log(array1[2]); //output: c

// push adds a value to the end of the array
array1.push("e"); 
console.log(array1); //output: [a, b, c, d, e]

// ------------ Array Methods ------------ //

// pop removes a value from the end of the array
array1.pop()
console.log(array1); //output: [a, b, c, d]

// Reset the value of an array item
array1[0] = "e";
console.log(array1); //output: [e, b, c, d]

// Iterating through an Array
array1.forEach((element) => {
    console.log(element); //output: e b c d 
})

// Changing the value of the array person1
// Person1 - 3 values changed because we are passing by reference
let person1 = ['Mother', 25, true];
let person2 = person1;
let person3 = person2;

person2.push(3);
person3.push("child", 2, false)

console.log(person1); // output: Mother, 25, true, 3
console.log(person2); // output: Mother, 25, true, 3
console.log(person3); // output: Mother, 25, true, 3, child, 2, false

// Two ways to avoid this: Spread Operator and Map (array method)

// 1. ES6 Spread operator to avoid passing by reference (recommended)
let person3 = ['Mother', 25, true];
let person4 = [...person3];

person4.push(3);

console.log(person3); // output: Mother, 25, true
console.log(person4); // output: Mother, 25, true, 3

// 2. Map Operator to change an array 
let person5 = ['Mother', 25, true];
let person6 = person5.map((element) => {
    return element
});

person4.push(3);

console.log(person5); // output: Mother, 25, true
console.log(person6); // output: Mother, 25, true, 3


