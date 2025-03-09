# Readonly fields

You can mark a class field as readonly to prevent it from being modified after it has been initialized.

```ts
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
```
