// To enforce private fields at runtime, use JavaScript's # syntax:

class Person {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  public greet() {
    console.log(`Hello, my name is ${this.#name}`);
  }
}

const person = new Person("Alice");
person.greet(); // Hello, my name is Alice

// This will fail:
// console.log(person.#name); // Property '#name' is not accessible outside class 'Person' because it has a private identifier.
