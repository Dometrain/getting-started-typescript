// Fields can be `readonly` to prevent them from being modified after initialization.
class Person {
  name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person("Alice", 30);
person.name = "Bob"; // OK
// person.age = 20; // Error: Cannot assign to 'age' because it is a read-only property.
