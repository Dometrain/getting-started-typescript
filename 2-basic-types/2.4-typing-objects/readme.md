# Typing objects

JavaScript supports declaring an object via object literal syntax. In TypeScript, when an object is created using object literal syntax, TypeScript infers the type of the object based on the properties.

```typescript
const user = { name: "Cory" };
```

Note that I didn't declare any type for user. TypeScript infers the type of `user` as `{ name: string }`. This is called type inference. TypeScript infers the type based on the value assigned.

In JavaScript, referencing a non-existent property on an object returns `undefined`. In TypeScript, referencing a non-existent property on an object returns an error. This is a good thing. It helps catch bugs early.

This behavior also helps catch typos. If you mistype a property name, TypeScript will catch it.

```typescript
const uppercaseName = user.name.toUppercase(); // Error: Property 'toUppercase' does not exist on type 'string'.
```

This errors because `toUppercase` should be `toUpperCase`. In JavaScript these sorts of typos can waste a lot of time.

TypeScript supports typing objects using two other approaches: interfaces and type aliases. Here's an example of each:

```ts
// Interface
interface User {
  id: number;
  name: string;
}

const user: User = { id: 1, name: "Cory" };

// Type
type User2 = {
  id: number;
  name: string;
};

const user: User2 = { id: 2, name: "Cory" };
```

Generally, you can use either. We'll explore the differences in detail later. For now, just know that you can use either approach to type objects.

Also, in other languages like C#, it's common to prefix interfaces with I. In TypeScript, it's not necessary. You can, but it's not common practice.

If I forget to assign a property, TypeScript will error. For example, if I forget to assign the `name` property, TypeScript will error.

```ts
// Errors if I forget property
const user3: User = { id: 3 };
```

If I try to add a property that isn't defined in the interface or type, TypeScript will error. For example, if I try to add an `age` property to the `User` object, TypeScript will error. This is because the `User` interface or type doesn't define an `age` property.

```ts
const user: User = { id: 1, name: "Cory", age: 1 };
```

If you want to allow additional properties, you can use the index signature. Here's an example:

```ts
interface User {
  id: number;
  name: string;
  [key: string]: any;
}
```

This says that the `User` object can have any additional properties. This is useful when you don't know all the properties ahead of time.

So how do you choose between interfaces and types? Most the time it doesn't matter. You can typically use whichever you prefer. But there are some cases you'll want to use one over the other. We'll explore the differences between type aliases and interfaces in an upcoming lesson.
