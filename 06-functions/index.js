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

// Nested Function
function outer() {
  console.log("outer");

  return function inner() {
    // We are returning this function from outer
    console.log("inner");
  };

  // inner(); // Uncomment this to directly call inner from within outer
}

const returnedFunction = outer(); // Output: "outer"
returnedFunction(); // Output: "inner"

// Callback Function Example 1
function foo1(func) {
  console.log("foo1");
  func(); // Calling the passed function
}

foo1(function () {
  // Anonymous function passed as callback
  console.log("buz1");
});

// Callback Function Example 2
const toCallBuzz = true;

function foo(func) {
  console.log("foo");
  if (toCallBuzz) {
    func(); // Conditional callback
  }
}

const buz = function () {
  console.log("buz");
};

foo(buz); // Output: "foo" then "buz"

// Pure Function
function greetMsg(name) {
  return "Hello " + name; // No side effects, always same output for same input
}
console.log(greetMsg("ferdaus")); // "Hello ferdaus"
console.log(greetMsg("ferdaus")); // "Hello ferdaus"

// Impure Function
let greetingMsg = "Hello ";
function greeting(name) {
  return greetingMsg + name; // Depends on outer variable
}
console.log(greeting("ferdaus")); // "Hello ferdaus"
greetingMsg = "Hola ";
console.log(greeting("ferdaus")); // "Hola ferdaus" — different output for same input

// Higher Order Function (accepts function as parameter)
function getCamera(camera) {
  camera(); // Calls the passed function
}

getCamera(function () {
  console.log("Sony");
});

// HOF Returning Function
function returnFunc(param) {
  return function () {
    if (param === 1) {
      console.log("Hello");
    }
  };
}

const retFun = returnFunc(3); // Will not log because param !== 1
retFun(); // Nothing logs

// Arrow Function
let greetMe1 = (greetingMsg) => {
  return greetingMsg + " great"; // Curly braces needed for multi-line body
};
console.log(greetMe1("Hola"));

let greetMe2 = (greetingMsg) => greetingMsg + " great"; // One-liner without return
console.log(greetMe2("Hello"));

// IIFE (Immediately Invoked Function Expression)
(function (count) {
  console.log("IIFE", count);
})(1); // Outputs: IIFE 1

// Function Execution Stack / Call Stack Explanation

/*
Example A:
f1() {...}
f2() {...}
f3() {...}
Calling: f1(); f2(); f3();

Stack:
push f1 -> pop f1
push f2 -> pop f2
push f3 -> pop f3

Example B:
f1() {...}
f2() { f1(); }
f3() { f2(); }
Calling: f3();

Stack:
push f3 -> push f2 -> push f1
Then pop f1 -> pop f2 -> pop f3
*/

// Recursion Example: Function calling itself
function fetchWater(count) {
  console.log("Fetching Water...", count);
  if (count === 0) {
    console.log("No more water is left to fetch...");
    return;
  }
  fetchWater(count - 1); // Recursive call
}

fetchWater(5); // Calls itself 5 times
