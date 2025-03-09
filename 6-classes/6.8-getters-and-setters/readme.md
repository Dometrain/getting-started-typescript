# Getters and Setters

TypeScript increases the type safety of getters and setters with some extra rules.

If `get` exists but there's no `set`, TypeScript knows the property is readonly:

```typescript
class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}
```

If you try to set the property, you'll get an error:

```typescript
const person = new Person("Alice");
console.log(person.name); // Alice
// person.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
```

And if the setter's type isn't specified, it's inferred. In this case, TypeScript knows the setter must be a string:

```typescript
class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}
```

Also, keep in mind that if there's no logic in the getter or setter, then it's needless.
