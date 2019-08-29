// ------------------ Conditionals ---------------- //
// 9. Conditional Statements
/*  
- && = and
- || = or
- else is the default statement
*/

let change = 5.55;

// Truthy if statement
if(change === 5.55) {
    console.log(`Your change is ${change}`); // returns Your change is 5.55
};

// Falsey if statement 
if(change === 6) {
    console.log(`Your change is ${change}`); // returns nothing because it is not true
};

// If else statement
if(change === 7) {
    console.log(`Your change is ${change}`); // returns (nothing)
} else {
    console.log("I kept your change!!!") // returns I kept your change!!!
}

// Else if statement
if(change === 8) {
    console.log(`Your change is ${change}`); // returns (nothing) 
} else if (change === 9) {
    console.log("I kept your change!!!"); // returns (nothing)
} else {
    console.log("Thats how else if is done!"); // returns Thats how else if is done!
}

// Evaluating two statements (Either or statements) && = and
if(change === 6 || 5.55) {
    console.log("One or the other statement is true"); // returns One or the other statement is true
} else {
    console.log("Both statements are false");
}

// Evaluating two statements (If this is true And this is true)
if(change === 5.55 && true === true) {
    console.log("The 1st statement is true"); // returns One or the other statement is true
} else {
    console.log("One of the statements are false");
}

//
if(change === 5.55) {
    console.log("true"); // returns true
}

// ------------------------- Challenge ------------------------- //
// Guess if the statement will be false or true

console.log(12 === 12 && 5 < 4); // returns false
console.log(12 === 12 || 5 < 4); // returns true
console.log((5 >= 5 || 4 > 4) && 3 + 2 == 5); // returns true
