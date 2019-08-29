// ------------------ Loops ---------------- //
// 11. Loops
/*  
- first instantiate a variable
- then counter variable is initialized "i" for iteration
- Used to check a finite number of cases
*/

// Simple while loop

let count = 0;

while (count < 20) {
  count++;
}

console.log(count); // returns 20 (runs 20 times)

// While loop running until true
let baskets = 0;
while (true) {
  baskets++;
  if (baskets >= 20) {
    break;
  }
}

console.log(baskets); // returns 20 (runs 20 times)

// Do while loop will run atleast once 
let runs = 0;
do {
  runs++;
  if(runs >= 20) {
    break;
  }
}
while(false) 
console.log(runs); // returns 1