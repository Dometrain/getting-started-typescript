// Abstract constructor signature example
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
