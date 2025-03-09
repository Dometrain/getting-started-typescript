// Exercise: Ambient Types in TypeScript

// Question 1:
// Declare an ambient type for a library named "myLibrary" that has a function
// named "greet" which takes a string argument and returns a string.

declare const myLibrary: {
  greet(name: string): string;
};

// Question 2:
// Assume you have a global variable named "API_URL" which is a string.
// Declare the ambient type for this global variable.

declare const API_URL: string;

// Question 3:
// Declare an ambient class named "Animal" with a constructor that takes a
// string argument "name" and a method "speak" that returns a string.

declare class Animal {
  constructor(name: string);
  speak(): string;
}
