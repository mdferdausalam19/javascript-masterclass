// Step 1: Global Execution Context (GEC) is created
// - Memory is allocated for all variables declared with 'var' and initialized to `undefined`.
// - Function declarations are hoisted and their entire definition is stored in memory.

console.log("Inside Global Execution Context"); // Execution Phase: logs this line

var a = 5; // Variable `a` is assigned the value 5 during the execution phase

// Function declaration: `testMe` is hoisted with its full function definition stored in memory.

function testMe() {
  // When testMe() is invoked, a new Function Execution Context (FEC) is created and pushed onto the Call Stack.
  // Step 2: testMe Execution Context (FEC) - Creation Phase
  // - Variables `b` and `user` are hoisted and initialized to `undefined`.
  // - `testAgain` is hoisted with its full function definition stored in memory.

  console.log("Inside testMe Execution context"); // Logs this line from within FEC of testMe

  var b = 10; // Assigned during the execution phase

  var user = {
    name: "tapas",
    country: "India",
  }; // Object `user` is created in memory, and a reference is stored in the 'user' variable. // Function declaration `testAgain` is already hoisted above, ready to be executed.

  function testAgain() {
    // Step 3: testAgain Execution Context (FEC) is created and pushed onto the Call Stack.
    // This is a nested execution context inside testMe.

    console.log("Inside testAgain Execution Context"); // Logs this line inside FEC of testAgain // No new variables declared here.

    console.log("Exiting testAgain Execution Context"); // Logs exit line from testAgain // testAgain FEC is popped off the Call Stack after execution.
  }

  testAgain(); // Calling the inner function (testAgain) → New FEC is created and run.

  console.log("Exiting testMe execution context"); // Execution resumes in testMe after testAgain finishes. // testMe FEC is popped off the Call Stack after execution.
}

testMe(); // Calling testMe() → New FEC created and run.

console.log("Exiting global execution context");
// Execution returns to GEC after testMe completes.
// GEC will be popped off the Call Stack after all code finishes.
