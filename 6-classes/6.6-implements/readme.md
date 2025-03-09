# Implements

TypeScript provides an `implements` keyword to declare that a class satisfies a given interface. This is a way to ensure that a class has a certain set of methods and properties. But note: `implements` merely declares that a class satisfies a given interface. It does not change the type of the class or its methods.

```typescript
interface Animal {
  name: string;
  speak(message: string): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(message: string) {
    console.log(message);
  }
}
```

Again, note that `implements` only checks that the class is compatible with the interface. It does NOT change the type of the class or its methods.

And a class can implement either an interface or a type. If I change the `Animal` interface to a type, the code still works.
