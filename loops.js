// ------------------ Loops ---------------- //
// 11. Loops
/*  
- first instantiate a variable
- then counter variable is initialized "i" for iteration
- Used to check a finite number of cases
*/

// Simple for loop

let total = 0;

for(i = 0; i < 5; i++) {
  console.log(i); // returns 0, 1, 2, 3, 4
}

// Adding the values to the total

for(i = 0; i < 5; i++) {
  total += i;
}
console.log(`The values of total ${total}`); // returns 10

// Iterating through an array when the number of values to iterate through is unknown

let numArray = [10, 20, 30, 40, 50];

for(i = 0; i < numArray.length; i++) {

  console.log(numArray[i]); // returns 10, 20, 30, 40, 50
  total += numArray[i];
}
console.log(total) // returns 160 (total of numArray)