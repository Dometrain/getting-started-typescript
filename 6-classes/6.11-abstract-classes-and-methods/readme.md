# Abstract Classes, Methods, and Field

A class, method, or field can be abstract. This means it doesn't have an implementation. An abstract method or field must be inside an abstract class.

You can't instantiate an abstract class. You must create a subclass that implements all the abstract methods and fields.

```ts
abstract class Animal {
  abstract makeSound(): void;
  abstract move(): void;
}

// Can't instantiate.
// const cat: Animal = new Animal(); // Error: Cannot create an instance of an abstract class.

// Must extend and implement all abstract methods and fields.
class Dog extends Animal {
  makeSound() {
    console.log("Woof");
  }

  move() {
    console.log("Running");
  }
}
```

And if a function should accept something that can be constructed, use this abstract constructor signature.

```ts
abstract class Base {
  abstract getName(): string;

  printName() {
    console.log("Hello, " + this.getName());
  }
}

class Derived extends Base {
  getName() {
    return "world";
  }
}

// Specify that the constructor function must be a subclass of `Base`
function greet(ctor: new () => Base) {
  const instance = new ctor();
  instance.printName();
}

greet(Derived); // Hello, world
// greet(Base); // fails
```

This assures greet is passed a class that can be instantiated.

# Next up

Great news, we're almost to the end of the course! In the last section, I'll share some suggested next steps including tips for working with tsconfig, how to convert JavaScript projects to TypeScript, how to consume npm packages, TypeScript features to avoid, and what I suggest you use instead.
