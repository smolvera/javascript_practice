// --------- Scrimba Introduction to Javascript by Dylan Israel ---------- //
// 6. Objects
/* 
- Can use the dot property to reference a single value in an array
- Wrapped in curly braces {}
- Can pass values by reference so always instantiate a new object when adding a value
*/
//---------------------------- Objects --------------------------//
// Dot property
let friend = {
    //property name or key : value
    firstName: "Megan",
    lastName: "Brooks",
    address: {
        number: 600,
        street: "Broad Street",
        city: "Newark",
        state: "NJ",
    },
    age: 30,
    education: ["B.A. in Psychology", "Minor in Biology", "Full Stack Web Developer"]
};

console.log(friend.firstName); //output: Megan
console.log(friend.address.city); //output: Newark

// reassign the value
friend.address.city = "Bloomfield";
console.log(friend.address.city); //output: Bloomfield

console.log(friend.age); // output: 30
console.log(friend.education[2]); // output: Full Stack Web Developer

// Object.key to print out all the keys for accessing an object
console.log(Object.keys(friend)); //output: firstName, lastName, address, age, education
console.log(Object.values(friend)); // output: keys + values 

// hasOwnProperty() to find if a value exists
console.log(friend.hasOwnProperty('firstName')); //output: true

// Obeject.assign method to reassign a value without passing by reference effecting the original value
let friend2 = {
    fristName: "George"
}

// instantiate a new object 
friend3 = Object.assign({}, friend2);

friend3.lastName = "Michael";
console.log(friend2) //output: George
console.log(friend3); //output: George Michael
// instead use Object.assign