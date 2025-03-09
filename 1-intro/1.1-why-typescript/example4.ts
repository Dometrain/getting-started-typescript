// Typed function
function add(a: number, b: number): number {
  return a + b;
}

// This fails
// add("one", 2); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
