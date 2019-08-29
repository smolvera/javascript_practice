// ------------------ Functions ---------------- //
// 12. Functions
/*  
- A function is a way of storing code so that it can be reused multiple times
- You pass parameters through a function to minipulate it
- You have to call the function "add()" to invoke it
- Write less code is the key
*/

// Simple function example
function add() {
    console.log('add'); // returns add
}
add();

function five() {
  return 5;
}
console.log(five()); // returns 5

// Adding parameter to a function (reusable code)
function plus(num1, num2) {
  return num1 + num2;
}
console.log(plus(5, 3)); // returns 8
console.log(plus(2, 4)) // returns 6
console.log(plus(9, 10)) // returns 19