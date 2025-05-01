// ----------------------
// Control Flow in JavaScript
// ----------------------

// Control flow allows us to dictate the order in which code executes.
// Branching refers to conditional logic that changes the flow (like if/else, switch).

// if-else example 01:
let catchingBus = true;

if (catchingBus) {
  console.log("I will reach home on time"); // ✅ I will reach home on time
} else {
  console.log("I will be late to reach home");
}

// ternary operator
catchingBus
  ? console.log("I will reach home on time") // ✅ I will reach home on time
  : console.log("I will be late to reach home");

// if-else example 02:
let age = 8;

if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to Vote"); // ✅ You are not eligible to Vote
}

// if-else-if example 01: Grading System
let score = 96;

if (score >= 90) {
  console.log("Grade A"); // ✅ Grade A
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else if (score < 70) {
  console.log("Fail");
}

// Example of multiple if vs if-else-if
let x = 0;

console.log("=== Multiple if statements ===");

if (x === 0) {
  console.log("0"); // ✅ 0
}
if (x >= 0) {
  console.log("Greater than or equal to 0"); // ✅ Greater than or equal to 0
}
if (x <= 0) {
  console.log("Less than or equal to 0"); // ✅ Less than or equal to 0
}

console.log("=== if-else-if version ===");

if (x === 0) {
  console.log("Matched === 0"); // ✅ Matched === 0
} else if (x >= 0) {
  console.log("Matched >= 0");
} else if (x <= 0) {
  console.log("Matched <= 0");
}

// nested if-else
const condition = true;
const innerCondition = false;

if (condition) {
  console.log("Outer if"); // ✅ Outer if
  if (innerCondition) {
    console.log("Inner if");
  } else {
    console.log("Inner else"); // ✅ Inner else
  }
} else {
  console.log("Outer else");
}

// we cannot write "else" alone
// else { console.log("I am alone else") } // ❌ SyntaxError

// Switch case
let position = 2;

switch (position) {
  case 1:
    console.log("Print 1");
    break;
  case 2:
    console.log("Print 2"); // ✅ Print 2
    break;
  case 3:
    console.log("Print 3");
    break;
  case 4:
    console.log("Print 4");
    break;
  default:
    console.log("Nothing is matched");
}

let day = 4;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday"); // ✅ Thursday
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day Number");
}

let country = "Bangladesh";

switch (country) {
  case "Bangladesh":
    console.log("Welcome to Bangladesh!"); // ✅ Welcome to Bangladesh!
    break;
  case "India":
    console.log("Welcome to India!");
    break;
  default:
    console.log("You are choosing neither Bangladesh or India!");
}

// if-else vs switch case:
// (1) if-else checks sequentially; switch uses jump table for better optimization.
// (2) Better readability with switch when checking fixed values.
// (3) Use if-else for complex logical conditions.

// Fall through example
const city = "Bangalore";
switch (city) {
  case "Bangalore":
  case "Kolkata":
  case "Agra":
  case "Jaipur":
    console.log("All these are in India"); // ✅ All these are in India
    break;
  case "New York":
  default:
    console.log("It is in USA");
}
