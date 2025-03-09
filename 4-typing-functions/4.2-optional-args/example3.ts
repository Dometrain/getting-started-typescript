// Alternatively, you even specify a default but this is just a more verbose way of
// specifying an optional parameter:
function greet(name: string, greeting: string | undefined = undefined): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

greet("Alice", undefined); // Output: Hello, Alice!
