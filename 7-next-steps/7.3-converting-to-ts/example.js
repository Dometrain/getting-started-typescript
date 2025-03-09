import { calculateTriangleArea } from "./triangle";

function calculateRectangleArea(length, width) {
  return length * width;
}

function calculateCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

function logAddress(address) {
  console.log(address.street);
  console.log(address.city);
  console.log(address.zip);
}

console.log(`Rectangle Area: ${calculateRectangleArea("5", 10)}`); // Passing wrong type for first argument
console.log(`Circle Area: ${calculateCircleArea(7, 5)}`); // Too many arguments
console.log(`Triangle Area: ${calculateTriangleArea(4)}`); // Missing second argument
logAddress({ street: "123 Main St", city: "Springfield" }); // Missing zip code
