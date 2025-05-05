// ----------------------
// Functions in JavaScript
// ----------------------

// What is a function?
// A function is a block of code designed to perform a particular task, and is executed when "called".

// Benefits of using functions:
// - Reusability: Write once, use multiple times.
// - Modularity: Organize code into logical blocks.
// - Maintainability: Easier to manage and debug.

// Function Declaration (Defining a function)
function printThis() {
  // Function body
  console.log("Printing...");
}

// Function Call (Invoking the function)
printThis(); // Output: Printing...

// Function Expression (Assigning a function to a variable)
const printMe = function () {
  console.log("Print Me...");
};

printMe(); // Output: Print Me...

// Parameters & Arguments
// Parameters are placeholders defined in the function definition.
// Arguments are actual values passed when calling the function.

function sum(a, b) {
  // a and b are parameters
  const result = a + b;
  console.log(result);
}

sum(10, 9); // Output: 19 (10 and 9 are arguments)

// Use of "return" keyword
function mul(a, b) {
  const result = a * b;
  return result; // After return, the function exits — anything below will not run.
  console.log("hello"); // Unreachable code (will never execute)
}

const result = mul(3, 5);
console.log(result); // Output: 15

// Function that returns the double of a number
function double(x) {
  return 2 * x;
}
console.log(double(9)); // Output: 18

// Default Parameters
function calc(a = 0, b = 0) {
  // Default values will be used if arguments are not provided
  return 2 * (a + b);
}

console.log(calc(3, 4)); // Output: 14 (2 * (3 + 4))
console.log(calc()); // Output: 0 (2 * (0 + 0))
console.log(calc(1)); // Output: 2 (2 * (1 + 0))

// If default parameters weren't used, calling calc() or calc(1) would result in NaN

// Rest Parameter
function calculateThis(x, y, ...rest) {
  // Rest parameter must be the last in the function signature
  console.log(x, y, rest);
  // Example: rest becomes an array of remaining arguments
}

calculateThis(1, 2, 3, 4, 5, 6, 7, 8, 9);
// Output:
// x = 1
// y = 2
// rest = [3, 4, 5, 6, 7, 8, 9]
