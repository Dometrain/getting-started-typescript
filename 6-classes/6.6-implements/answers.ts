// Exercise: Understanding `implements` with Classes in TypeScript

// Question 1:
// Given the interface `Logger` below, create a class `ConsoleLogger` that
// implements the `Logger` interface and logs the message to the console.

interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message);
  }
}
