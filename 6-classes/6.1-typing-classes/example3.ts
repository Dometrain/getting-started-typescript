// Inheritance looks like plain JS - use the `extends` keyword
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
