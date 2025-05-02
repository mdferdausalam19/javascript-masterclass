// ----------------------
// Loops and Iterations in JavaScript
// ----------------------

// What is loops and iterations?
// A loop allows us to execute a block of code multiple times.
// Iteration refers to each individual execution of the loop's body.

// ----------------------
// for loop
// ----------------------
// A for loop is best when we know exactly how many times we need to run a block of code.

/* 
Syntax:
for (initialization; condition; update) {
    // statement
}
*/

// for loop example 01: print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i); // Output: 1 2 3 4 5
}

// for loop example 02: addition of even numbers between 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log("Sum is:", sum); // Output: Sum is: 2550

// for loop example 03: iterate over a string
let language = "JavaScript";
for (let i = 0; i < language.length; i++) {
  console.log(language.charAt(i)); // Output: J a v a S c r i p t (each on a new line)
  //   console.log(language[i]); // alternative way
}
