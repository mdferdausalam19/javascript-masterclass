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
