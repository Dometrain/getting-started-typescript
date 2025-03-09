# Declaring `this` in a Function

In JavaScript, the `this` keyword is a reference to the object that is executing the current function.

TypeScript is smart enough to analyze the control flow and provide autocomplete and type safety when using `this` in an object literal's method. Example:

```ts
const person = {
  name: "Alice",
  sayHello() {
    console.log(`Hello, ${this.name}!`); // type safe and autocomplete works here.
  },
};
```

A bare function can specify a `this` context as well. When a function is called, the value of `this` is determined by how the function is called. In TypeScript, you can declare the type of `this` in a function using the `this` keyword in the spot where you'd normally declare the parameter. This syntax works because in JS `this` isn't a valid parameter name, so TypeScript can safely use the keyword `this` here for type purposes.

```typescript
const person = { name: "Alice" };

function sayHello(this: { name: string }) {
  console.log(`Hello, ${this.name}!`);
}

sayHello.call(person); // Hello, Alice!
```

In the example above, the `sayHello` function is declared with a `this` parameter that expects an object with a `name` property. When the function is invoked using the `call` method, the `this` parameter is set to the `person` object, and the function can access the `name` property.

# Next up

So far we've been working code and types in the same file. But what about storing types and code in separate files? To do that, we need to use modules, which we'll explore modules next.
