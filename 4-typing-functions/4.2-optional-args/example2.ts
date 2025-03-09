// Alternatively, you can require explicitly passing undefined for a given optional parameter:
function greet(name: string, greeting: string | undefined): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

// Now this fails:
// console.log(greet("Alice")); // Error: Expected 2 arguments, but got 1
