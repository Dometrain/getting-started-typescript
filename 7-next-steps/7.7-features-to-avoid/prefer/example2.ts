// Prefer the long form
class Person2 {
  private name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public greet() {
    console.log(`Hi, ${this.name}, you're ${this.age} years old.`);
  }
}
