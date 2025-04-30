// ----------------------
// Operators and Expressions in JavaScript
// ----------------------

/*
🔹 Operator: A symbol used to perform operations on values (e.g., +, -, *, /).
🔹 Operand: The values on which the operator operates (e.g., in x + y, x and y are operands).
🔹 Expression: A combination of values, variables, and operators that evaluates to a result.
   - Assignment Expression: let x = 5;
   - Evaluating Expression: 5 + 4;
*/

// ----------------------
// Arithmetic Operators
// ----------------------

console.log("**** Arithmetic Operators ***");

let a = 10;
let b = 20;

let firstName = "ferdaus";
let lastName = "alam";
console.log(firstName + lastName); // ferdausalam ; Avoid string concatenation with +, prefer template literals

console.log(a + b); // 30
console.log(a - b); // -10
console.log(b - a); // 10
console.log(a * b); // 200
console.log(a / b); // 0.5
console.log(2 ** 3); // 8 (Exponentiation)
console.log(7 % 2); // 1 (Remainder)

// Increment and Decrement
let count = 5;

// Post-increment: returns current value, then increments
console.log(count++); // 5
console.log(count); // 6

// Pre-increment: increments first, then returns
console.log(++count); // 7
console.log(count); // 7

// Post-decrement
console.log(count--); // 7
console.log(count); // 6

// Pre-decrement
console.log(--count); // 5
console.log(count); // 5

// ----------------------
// Assignment Operators
// ----------------------

console.log("*** Assignment Operators ***");

let x = 10;
x += 5; // x = x + 5
console.log(x); // 15

x -= 3; // x = x - 3
console.log(x); // 12

x *= 2; // x = x * 2
console.log(x); // 24

x /= 4; // x = x / 4
console.log(x); // 6

// ----------------------
// Comparison Operators
// ----------------------

console.log("*** Comparison Operators ***");

// Loosely Equal (==): compares after type coercion — ❌ not recommended
console.log(4 == 5); // false
console.log(0 == false); // true
console.log(3 == "3"); // true
console.log(3 != "3"); // false

// Strictly Equal (===): compares value AND type — ✅ recommended
console.log(3 === "3"); // false
console.log(3 !== "3"); // true
console.log(3 === 3); // true
console.log(null === null); // true
console.log(undefined === undefined); // true

// Special Case: NaN (Not a Number)
console.log(NaN === NaN); // false
/*
Why? Because NaN is the only value in JavaScript that is not equal to itself.
To check for NaN, use Number.isNaN(value).
*/
console.log(Number.isNaN(NaN)); // true

// Object comparison compares references (memory addresses)
const obj1 = { name: "ferdaus" };
const obj2 = { name: "ferdaus" };

console.log(obj1 === obj2); // false (different memory addresses)
console.log(obj1 !== obj2); // true

// Relational Operators
console.log(4 > 3); // true
console.log(1 > 4); // false
console.log(3 < 4); // true
console.log(4 >= 4); // true
console.log(3 <= 3); // true
