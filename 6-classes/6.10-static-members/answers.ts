// Exercise 1: Change the class below to use a static field `pi`
// and a static method `calculateArea` that accepts a radius.

class Circle {
  static pi: number = 3.14;

  static calculateArea(radius: number): number {
    return Circle.pi * radius * radius;
  }
}

console.log(Circle.calculateArea(5)); // Output: 78.5

// Exercise 2: Create a class `Counter` with a private static field `count`
// that tracks of the number of instances created.
// Include a `getCount` method that returns the current count.

class Counter {
  private static count = 0;

  constructor() {
    Counter.count++;
  }

  static getCount(): number {
    return Counter.count;
  }
}

// Answer:
const counter1 = new Counter();
const counter2 = new Counter();
console.log(Counter.getCount()); // Output: 2
