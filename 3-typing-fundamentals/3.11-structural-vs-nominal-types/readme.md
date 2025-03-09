# Structural vs Nominal Types

TypeScript types are stuctural, not nominal. This means that TypeScript checks types based on their structure, not their name. This is different from some other languages, like C# or Java, where types are checked based on their name.

Here's an example to illustrate this:

```typescript
interface Product {
  id: number;
  name: string;
}

interface User {
  id: number;
  name: string;
}

const user: User = { id: 1, name: "Cory" };

// Allowed because the two interfaces have a compatible structure
const product: Product = user;
```

It would even work if the interfaces had a few extra properties:

```typescript
interface Product {
  id: number;
  name: string;
}

interface User {
  id: number;
  name: string;
  age: number;
}

const user: User = { id: 1, name: "Cory", age: 30 };

// Allowed because the two interfaces have a compatible structure. But the age property is not used.
const product: Product = user;
```

This is because TypeScript checks the structure of the types, not their name.

But, I can't do the reverse. If I try to assign a `Product` to a `User`, TypeScript will throw an error because the `Product` interface doesn't have the `age` property:

```typescript
interface Product {
  id: number;
  name: string;
}

interface User {
  id: number;
  name: string;
  age: number;
}

const product: Product = { id: 1, name: "Product 1" };

// Error: Type 'Product' is missing the following properties from type 'User': age
const user: User = product;
```

The downside of structural types is you may accidentally pass the wrong value to an argument. For example, if you have two interfaces with the same structure, you can pass a value of one type to a function that expects the other type:

```typescript
interface Product {
  id: number;
  name: string;
}

interface User {
  id: number;
  name: string;
}

function printUser(user: User) {
  console.log(user);
}

const product: Product = { id: 1, name: "Product 1" };

// No error, even though the function expects a User
printUser(product);
```

If you want nominal types in TypeScript, there's an advanced approach called "branded types" that allows you to create nominal types. I discuss nominal types in the deep dive course.

# Next up

Great, we've covered the fundamentals of TypeScript types. But what about handling functions? In the next section we'll learn how to type functions in TypeScript including function arguments, return types, optional arguments, and more.
