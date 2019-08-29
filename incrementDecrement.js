// 8. Increment and Decrement 
/* 
- used when decreasing or increasing a value
- ++ at the beginning adds the value and then executes the line of code
- ++ on the end executes the line of code then adds the value
*/ 

// add
let increment = 5;
// increment ++;
//or
increment += 1;
console.log(increment); // returns 6 

// subtract
let decrement = 6;
// decrement --;
//or
decrement -= 1;
console.log(decrement); // returns 5

let multiply = 3;
multiply *= 5;
console.log(multiply); // returns 15

let divide = 4;
divide /= 2;
console.log(divide); // returns 2

// --------------- Increment and Decrement Challenege ---------------- //
// What is the difference between ++five and six++ ?
// Difference is five++ adds the value after executing the code while ++six adds the value first and then executes the code. *Most used: five++*

let five = 5;
// five++
// console.log(five) // returns 6
console.log(five++) // returns 6

let six = 6;
// ++six 
// console.log(six) // returns 7
console.log(++six) // returns 8

let one = 1;
console.log(++one) // returns 2
let two = 2;
console.log(two++) // returns 2