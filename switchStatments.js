// ------------------ Switch Statements ---------------- //
// 10. Switch Statements
/*  
- you must "break" out of a swtich statement or it will continue to run
- Used to check a finite number of cases
- Default is the else statement
- no need to break after default statement
*/

let answer = "D";

switch (answer) {
  case "A":
    console.log("A is Wrong");
    break;
  case "B":
    console.log("B is Wrong");
    break;
  case "C":
    console.log("C is correct");
    break;
  default:
    console.log("None of theses are correct");
}
