# Optional Arguments

What if a function has an optional argument? Append the argument's name with a question mark `?` to make it optional.

```typescript
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}
```

Note that the greeting argument is typed as string or undefined. This is because the argument is optional and can be omitted. Also, remember that optional arguments must come after required arguments. If we make the first argument optional, the second argument must also be optional. Otherwise the compiler will throw an error.

Remember that JavaScript allows calling a function with fewer arguments than declared. TypeScript will throw an error if you call a function with fewer arguments than declared. Only make arguments optional if you expect them to be omitted in some cases.

Alternatively, you can require explicitly passing undefined for a given optional parameter:

```typescript
function greet(name: string, greeting: string | undefined): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

// Now this fails:
// console.log(greet("Alice")); // Error: Expected 2 arguments, but got 1
```

You even specify a default but this is just a more verbose way of specifying an optional parameter:

```typescript
function greet(name: string, greeting: string | undefined = undefined): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}
```
