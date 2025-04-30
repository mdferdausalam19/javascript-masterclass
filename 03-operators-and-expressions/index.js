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

// ----------------------
// Logical Operators
// ----------------------

console.log("*** Logical Operators ***");

// Logical AND (&&): Returns first falsy value or last truthy if all are truthy
console.log(false && false); // false
console.log(true && false); // false
console.log(true && true); // true
console.log(false && true); // false
console.log("cow" && "horse"); // "horse" (since both are truthy, returns second)

// Logical OR (||): Returns first truthy value
console.log(false || false); // false
console.log(true || false); // true
console.log(true || true); // true
console.log(false || true); // true
console.log("cow" || "horse"); // "cow" (returns first truthy)

// Logical NOT (!): Inverts a boolean value
console.log(!false); // true

// Nullish Coalescing Operator (??):
// Returns right-hand side only if left is null or undefined (NOT other falsy values like 0 or false)
console.log(null ?? 1); // 1
console.log(undefined ?? 3); // 3
console.log(false ?? "string"); // false
console.log(0 ?? "string"); // 0

// ----------------------
// Conditional (Ternary) Operator
// ----------------------

console.log("**** Conditional (ternary) operator ****");

// Syntax: condition ? expression_if_true : expression_if_false
let age = 24;
age >= 60 ? console.log("Senior Citizen") : console.log("Non Senior Citizen");

// ----------------------
// Bitwise Operators
// ----------------------

console.log("**** Bitwise operators ****");

// Bitwise AND (&): 1 if both bits are 1
console.log(15 & 9); // 9
// 15 (1111) & 9 (1001) => 1001 => 9

// Bitwise OR (|): 1 if either bit is 1
console.log(15 | 9); // 15
// 1111 | 1001 => 1111 => 15

// Bitwise XOR (^): 1 if bits are different
console.log(15 ^ 9); // 6
// 1111 ^ 1001 => 0110 => 6

// Left Shift (<<): Shifts bits to the left (adds zeroes on the right)
console.log(9 << 2); // 36
// 1001 << 2 => 100100 => 36

// Right Shift (>>): Shifts bits to the right (removes bits from right)
console.log(9 >> 2); // 2
// 1001 >> 2 => 0010 => 2

// ----------------------
// Grouping Operator ()
// ----------------------

console.log("**** Grouping ****");

let p = 1;
let q = 2;
let r = 3;

// Operator precedence: multiplication (*) has higher precedence than addition (+)
console.log(p + q * r); // 1 + (2 * 3) = 1 + 6 = 7

// You can change the precedence using parentheses (grouping)
console.log((p + q) * r); // (1 + 2) * 3 = 3 * 3 = 9

// ----------------------
// typeof Operator
// ----------------------

console.log("**** typeof ****");

// typeof is used to determine the data type of a value or variable
console.log(typeof "ferdaus"); // "string"
console.log(typeof false); // "boolean"

let size = 100;
console.log(typeof size); // "number"

const numbers = [1, 2, 3, 4];
console.log(typeof numbers); // "object" (arrays are technically objects in JS)

console.log(typeof null); // "object" (this is a well-known JS quirk)
console.log(typeof undefined); // "undefined" (no value assigned)
