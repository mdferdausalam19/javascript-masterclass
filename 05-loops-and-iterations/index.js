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

// ----------------------
// Nested Loop
// ----------------------
// A loop inside another loop. Useful for working with 2D structures like grids, tables, etc.
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log("row", i, "col", j);
    // Output:
    // row 1 col 1
    // row 1 col 2
    // ... up to row 3 col 3
  }
}

// ----------------------
// Break and Continue Statements
// ----------------------

// break: Exits the loop immediately when the condition is met
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i); // Output: 1 2
}

// continue: Skips the current iteration and proceeds with the next one
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i); // Output: 1 2 4 5
}

// ----------------------
// Multiple Counters in a Single Loop
// ----------------------
// Two variables incrementing and decrementing simultaneously
for (let i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
  console.log(i, j); // Output: 1 10, 2 9, ..., 10 1
}

// ----------------------
// Star Pattern Printing
// ----------------------
/*
 *
 * *
 * * *
 * * * *
 * * * * *
*/

// Method 01: Nested loop approach
for (let row = 1; row <= 5; row++) {
  let str = "";
  for (let col = 1; col <= row; col++) {
    str += "* ";
  }
  console.log(str);
}

// Method 02: Using string repeat
for (let i = 1; i <= 5; i++) {
  console.log("* ".repeat(i));
}

// ----------------------
// While Loop
// ----------------------
// Runs as long as the condition is true. Best when the number of iterations is unknown in advance.
let i = 1;
while (i <= 5) {
  console.log(i); // Output: 1 2 3 4 5
  i++;
}

// ----------------------
// Do-While Loop
// ----------------------
// Executes at least once, even if the condition is false initially
let counter = 1;
do {
  console.log(counter); // Output: 1 2 3 4 5
  counter++;
} while (counter <= 5);

// ----------------------
// Infinite Loops (Do Not Run These!)
// ----------------------
/*
for (;;) {
  // console.log("I am looping forever!!!")
}

while (true) {
  // console.log("I am looping forever!!!")
}

do {
  // console.log("I am looping forever!!!")
} while (true); 
*/