// Exercise: Understanding TypeScript's Global Keyword

// Question 1:
// Declare a global variable named `cart` of type string[] and assign it to an empty array.

declare global {
  var cart: string[];
}
cart = [];

// Question 2:
// Create a global function named `log` that takes a message of type string and returns void.

declare global {
  function log(message: string): void;
}

// Question 3:
// Create a global constant named `GLOBAL_CONSTANT` of type number and assign it the value 42.

declare global {
  const GLOBAL_CONSTANT: number;
}
const GLOBAL_CONSTANT = 42;

// Question 4:
// Extend the global `Window` interface to include a method `customAlert` that takes a string and returns void.
// Then implement the `customAlert` method to call alert with the provided message.

declare global {
  interface Window {
    customAlert(message: string): void;
  }
}
window.customAlert = function (message: string): void {
  alert(message);
};
