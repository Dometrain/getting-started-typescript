// Exercise: Abstract Classes and Methods

// 1. Create an abstract class `Vehicle` with an abstract method `move`.
// 2. Create a subclass `Car` that extends `Vehicle` and implement the `move` method
// to log "The car is driving."

abstract class Vehicle {
  abstract move(): void;
}

class Car extends Vehicle {
  move(): void {
    console.log("The car is driving.");
  }
}

const car = new Car();
car.move(); // Output: The car is driving.
