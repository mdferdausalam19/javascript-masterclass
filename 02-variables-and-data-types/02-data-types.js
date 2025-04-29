// ===============================================
// 🧠 JavaScript Data Types
// ===============================================

/*
📌 What are Data Types?
In JavaScript, data types define the kind of value a variable can hold. There are two main categories:
1. 🔹 Primitive Data Types — stored directly by value.
2. 🔸 Non-Primitive (Reference) Data Types — stored as references in memory.
*/

// --------------------------------------------------
// 🔹 Primitive Data Types
// --------------------------------------------------

// 1. String — A sequence of characters
let greeting = "Hello, world!";
console.log(typeof greeting); // Output: string

// 2. Number — Includes integers and floating-point numbers
let age = 25;
let pi = 3.1416;
console.log(typeof age); // Output: number

// 3. Boolean — True or False values
let isLoggedIn = true;
console.log(typeof isLoggedIn); // Output: boolean

// 4. Undefined — A variable declared but not assigned
let score;
console.log(score); // Output: undefined
console.log(typeof score); // Output: undefined

// 5. Null — Explicitly represents 'no value'
let data = null;
console.log(data); // Output: null
console.log(typeof data); // Output: object (this is a JS quirk)

// 6. BigInt — For large integers beyond Number limit
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // Output: bigint

// 7. Symbol — Unique and immutable identifiers
let id = Symbol("userID");
console.log(typeof id); // Output: symbol

// --------------------------------------------------
// 🔸 Non-Primitive (Reference) Data Types
// --------------------------------------------------

// 1. Object — Collection of key-value pairs
let student = {
  name: "Ferdaus",
  age: 24,
  isEnrolled: true,
};
console.log(typeof student); // Output: object
console.log(student.name); // Output: Ferdaus

// 2. Array — Ordered list of values (also an object type)
let numbers = [10, 20, 30, 40];
console.log(typeof numbers); // Output: object
console.log(numbers[1]); // Output: 20

// 3. Function — Reusable block of code
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(typeof greet); // Output: function
console.log(greet("Alam")); // Output: Hello, Alam!

// --------------------------------------------------
// 🔁 Pass by Value vs Pass by Reference
// --------------------------------------------------

/*
🔹 Primitive types are passed by value:
A copy of the variable is made; changing one does not affect the other.
*/

let x = 5;
let y = x; // y gets a copy of x
y = 10;

console.log(x); // Output: 5
console.log(y); // Output: 10

/*
🔸 Reference types are passed by reference:
Both variables point to the same memory location. Changing one affects the other.
*/

let person = { name: "Alice" };
let anotherPerson = person; // Both refer to the same object

anotherPerson.name = "Bob";

console.log(person.name); // Output: Bob
console.log(anotherPerson.name); // Output: Bob
