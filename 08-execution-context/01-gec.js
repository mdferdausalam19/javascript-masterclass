// ------------------------------
// Global Execution Context (GEC)
// ------------------------------

// When the JavaScript engine starts executing code, it creates the GEC.
// The GEC has two phases: Creation Phase and Execution Phase.

var name = "Tom"; // Memory allocated in the creation phase; initialized in the execution phase.

function sayName() {
  // Function definition is stored in memory during creation phase.
  console.log(this.name); // In browser global context, `this` refers to `window`, so this logs "Tom".
}
