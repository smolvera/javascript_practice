// --------- Scrimba Introduction to Javascript by Dylan Israel ---------- //
// 1. Strings
/* 
- "double" or 'single' quotes
- string interpolation (backtics) is an ES6 change
- over 20 methods for strings
- 
*/ 

let firstName = "Samantha";
let lastName = "Olvera";

let course = "Introduction to Javascript";
let courseSite = "www.scrimba.com";

// Concat strings with a space
console.log(firstName +" "+ lastName); // returns Samantha Olvera

// Concat strings with nospace
console.log(firstName + lastName); // returns SamanthaOlvera

// String Interpolation with space instead of concatenate using backtics
console.log(`${firstName} ${lastName}`); // returns Samantha Olvera

// Another concatenated string
console.log(firstName + " " + lastName + " is taking "+ course +" on "+ courseSite +".");
//returns Samantha Olvera is taking Introduction to Javascript on www.scrimba.com.

// --------------- Most Used String Methods -----------------------//

// String with space and length added 
console.log(firstName.length + " " + lastName.length); // returns 

//  String with trimming empty space from the start and end of a string
console.log(`         ${firstName} ${lastName}              `.trim().length); // returns 15

// Capital letters
console.log(`${firstName} ${lastName}`.toUpperCase()); // returns SAMANTHA OLVERA

// Lowercase letters
console.log(`${firstName} ${lastName}`.toLowerCase()); // returns samantha olvera

// String Split to find empty space
console.log(`${firstName} ${lastName}`.split(' ')); // returns ["Samantha", "Olvera"]

// String split to seperate characters
console.log(`${firstName} ${lastName}`.split('')); // returns ["S", "a", "m", "a", "n", "t", "h", "a", " ", "O", "l", "v", "e", "r", "a"]

/* String Challenge
Concatenate two firstName and lastName (from above) to be the value of fullName
*/
let fullName = `${firstName} ${lastName}`;
console.log(fullName); // returns Samantha Olvera

