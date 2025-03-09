// Abstract class has no implementation. Must be extended.
abstract class Animal {
  abstract makeSound(): void; // only allowed inside abstract classes
  abstract move(): void;
  run() {
    console.log("Running");
  }
}

// Can't instantiate.
// const cat: Animal = new Animal(); // Error: Cannot create an instance of an abstract class.

// Must extend
class Dog extends Animal {
  makeSound() {
    console.log("Woof");
  }

  move() {
    console.log("Running");
  }
}

const dog = new Dog();
dog.run();
