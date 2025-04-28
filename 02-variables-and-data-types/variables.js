// ----------------------
// Introduction to Variables in JavaScript
// ----------------------

// Variables are containers for storing data values.

// You can declare variables using:
// - var (function-scoped)
// - let (block-scoped)
// - const (block-scoped, cannot be reassigned)

// ----------------------
// Variable Declaration and Assignment
// ----------------------

// Example using 'let'
let fruit = "mango"; // Declare and assign
fruit = "kiwi"; // Reassigning a new value

let vegetable = "carrots";
fruit = vegetable; // Copying the value of one variable to another

// Valid variable names
let dollarSign = "hello"; // $ is allowed
let underscore = "underscore"; // _ is allowed

// Invalid variable names (examples - cannot start with numbers or contain special characters like '-')
// let 2morrow = "invalid";  // ❌
// let react-play = "invalid"; // ❌

// ----------------------
// Variable Naming Best Practices
// ----------------------
// - Use camelCase for multi-word variables (e.g., fullName, myAge)
// - Names should be human-readable and meaningful
// - Don't use reserved keywords (like `let`, `function`, `class` etc.)

let myName = "ferdaus";
let MyName = "alam"; // JavaScript is case-sensitive

// ----------------------
// Difference Between var, let, and const
// ----------------------

// 'var' is function-scoped and can be redeclared
var address = "Bangladesh";
console.log(address);

var address = "Canada"; // Redeclaring var
console.log(address);

// 'let' is block-scoped and cannot be redeclared within the same scope
let city = "Dhaka";
console.log(city);

// let city = "Toronto"; // ❌ Error: Identifier 'city' has already been declared
city = "Toronto"; // ✅ Reassignment is allowed
console.log(city);

// 'const' is block-scoped and cannot be reassigned or redeclared
const country = "Bangladesh";
console.log(country);

// country = "Canada"; // ❌ Error: Assignment to constant variable

// ----------------------
// Multiple Variable Declarations
// ----------------------
let fullName, department, section;
