const person = {
  name: "Alice",
  sayHello() {
    console.log(`Hello, ${this.name}!`); // type safe, and autocomplete works.
  },
};
