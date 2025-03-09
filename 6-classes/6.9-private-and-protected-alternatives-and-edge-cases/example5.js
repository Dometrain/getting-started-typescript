// Plain JS file to show that JavaScript's # syntax is enforced at runtime:

class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.#name}`);
  }
}

const person = new Person("Alice");
person.greet(); // Hello, my name is Alice

// This will fail:
// console.log(person.#name); // Property '#name' is not accessible outside class 'Person' because it has a private identifier.
