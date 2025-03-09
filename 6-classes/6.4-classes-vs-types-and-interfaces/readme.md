# Classes vs. Types and Interfaces

I want to pause for a moment and note a difference between JS classes vs TypeScript interfaces and types.

Classes are a blueprint for creating objects with properties and methods. They are a way to define a new type that can be used to create objects. Unlike classes, types and interfaces are just for defining an object's shape, so they can't be instantiated.

This doesn't work:

```typescript
interface Person {
  name: string;
  age: number;
}

const person = new Person(); // Error: Cannot create an instance of an interface.
```

But this does:

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person = new Person("Alice", 30);
```
