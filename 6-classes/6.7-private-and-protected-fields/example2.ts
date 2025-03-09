// You can also mark a constructor parameter as private to automatically
// create a private field with the same name:

class Person {
  constructor(private name: string) {}

  public greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person = new Person("Alice");
person.greet(); // Hello, my name is Alice

// This will fail:
// console.log(person.name); // Error: Property 'name' is private and only accessible within class 'Person'.

// Remember, TS doesn't exist at runtime, so private fields are enforced by the compiler, not by the runtime.
// If you compile example to JS and run it, you'll see that you can still access the private field.
