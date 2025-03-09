# Section Intro

Classes are built into JavaScript. And TypeScript adds a number of handy type-safe features on top of classes. In this module, we'll explore a variety of techniques for typing classes in TypeScript.

# Classes in TypeScript

Classes are a blueprint for creating objects with properties and methods. They are a way to define a new type that can be used to create objects.

Just like in plain JavaScript, classes are defined using the `class` keyword:

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
```

Notice that there's very little here that's unique to TypeScript. The only difference is that we're explicitly declaring the types of the properties and the arguments of the constructor and methods. The constructor works pretty much the same as any other function, except you can't declare a return type.

These plain field declarations create a public writable property.

When you create an instance of a class, you can pass in the required arguments to the constructor:

```typescript
const person = new Person("Alice", 30);
person.greet(); // Hello, my name is Alice and I am 30 years old.
```

If the field's type is omitted, then the type is `any`:

```typescript
class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}
```

Inheritance looks the same as plain JS - use the `extends` keyword:

```typescript
class Employee extends Person {
  jobTitle: string;

  constructor(name: string, age: number, jobTitle: string) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old, and I work as a ${this.jobTitle}.`
    );
  }
}
```

And TypeScript assures that the derived class follows the base class's contract. If I create an incompatible change like making the greet method accept an argument, I get a compile-time error.

You must call `super` in the constructor of a derived class if it has a base class:

```typescript
class Employee extends Person {
  jobTitle: string;

  constructor(name: string, age: number, jobTitle: string) {
    super(name, age);
    this.jobTitle = jobTitle;
  }
}
```

If you forget to call `super` when extending a class, you'll get an error.
