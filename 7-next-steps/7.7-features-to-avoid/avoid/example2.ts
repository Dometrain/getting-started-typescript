// Avoid property shorthand
class Person {
  constructor(private name: string, readonly age: number) {}

  public greet() {
    console.log(`Hi, ${this.name}, you're ${this.age} years old.`);
  }
}
