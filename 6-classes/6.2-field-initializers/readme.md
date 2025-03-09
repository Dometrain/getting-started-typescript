Fields can have initializers, which run when the object is created:

```ts
class Person {
  name = "Unknown";
  age = 0;

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person = new Person();
person.greet(); // Hello, my name is Unknown and I am 0 years old.
```

The type can be inferred from the initializer, so you don't need to specify it explicitly.
