// Exercise 1: Change the class below to use a static field `pi`
// and a static method `calculateArea` that accepts a radius.

class Circle {
  pi: number = 3.14;

  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return this.pi * this.radius * this.radius;
  }
}

// Exercise 2: Create a class `Counter` with a private static field `count`
// that tracks of the number of instances created.
// Include a `getCount` method that returns the current count.
