// ----------------------------------
// Functional Execution Context (FEC)
// ----------------------------------

// Each time a function is invoked, a new FEC is created and pushed onto the call stack.

var name = "Tom";

function tom() {
  // FEC is created for this function when called.
  console.log(this.name + " Runs"); // Logs "Tom Runs" if in global context (`this` refers to `window`)
}

// Invoke the function tom()
tom();
