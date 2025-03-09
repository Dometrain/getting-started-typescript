// Can declare this on bare functions as well
const person = { name: "Alice" };

function sayHello(this: { name: string }) {
  console.log(`Hello, ${this.name}!`);
}

sayHello.call(person); // Hello, Alice!
