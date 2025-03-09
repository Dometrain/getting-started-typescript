// If strictPropertyInitialization is enabled, then you
// must initialize all properties in the constructor or with an initializer.
class Person {
  name = "";
  age: number;

  // Comment this out to see the strictPropertyInitialization error:
  // Or, can initialize the `age` field above via default value
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
