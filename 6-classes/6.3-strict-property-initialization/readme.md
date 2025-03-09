Problem: What if you forget to initialize a property?

Solution: TypeScript supports an optional setting called `strictPropertyInitialization`. If strictPropertyInitialization is enabled, then you must initialize all properties in the constructor or with an initializer.

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

If I set `strictPropertyInitialization` to false in tsconfig.json, then I can create a class without initializing its properties.

```typescript
class Person {
  name: string;
  age: number;

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}
```

So it's a good idea to keep this setting enabled.
