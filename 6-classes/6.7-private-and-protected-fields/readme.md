# Private Fields

In TypeScript, you can mark a class field as private to prevent it from being accessed from outside the class.

```ts
class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person = new Person("Alice");
person.greet(); // Hello, my name is Alice

// This will fail:
// console.log(person.name); // Error: Property 'name' is private and only accessible within class 'Person'.

// This will also fail:
// person.name = "Bob"; // Error: Property 'name' is private and only accessible within class 'Person'.
```

You can also mark a constructor parameter as private to automatically create a private field with the same name:

```ts
class Person {
  constructor(private name: string) {}

  public greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person = new Person("Alice");
person.greet(); // Hello, my name is Alice

// This will fail:
// console.log(person.name); // Error: Property 'name' is private and only accessible within class 'Person'.

// Remember, TS doesn't exist at runtime, so private fields are enforced by the compiler, not by the runtime.
// If you compile example to JS and run it, you'll see that you can still access the private field.
```

## Protected Fields

TypeScript also supports the `protected` keyword to declare protected fields:

```ts
class Person {
  protected name: string;
}
```

In this example, `name` is a protected field. Protected fields can only be accessed by subclasses:

```ts
class Chef {
  public cook() {
    console.log("Cooking " + this.getDish());
  }
  protected getDish() {
    return "pasta";
  }
}

class SpecialChef extends Chef {
  public prepareSpecialDish() {
    // OK to access protected member here
    console.log("Preparing special dish: " + this.getDish());
  }
}

const chef = new SpecialChef();
chef.cook(); // OK
// chef.getDish(); // Error: Property 'getDish' is protected and only accessible within class 'Chef' and its subclasses.
```

And here's an odd one - Although the derived class must follow the base classes contract, it can change a field's access from protected to private:

```ts
// Derived class may expose a subtype of the base class
class Base {
  protected a = 1;
}

class Derived extends Base {
  a = 2; // No modifier, so public
}

const d = new Derived();
console.log(d.a); // OK
```

This trick doesn't work with `private`, since the derived class can't access the private field:

```ts
class Base {
  private x = 0;
}

class Derived extends Base {
Class 'Derived' incorrectly extends base class 'Base'.
  Property 'x' is private in type 'Base' but not in type 'Derived'.
  x = 1;
}
```

TypeScript won't allow accessing a protected field from a sibling class:

```ts
class Base {
  protected x: number = 1;
}

class Derived1 extends Base {
  protected x: number = 2;
}

class Derived2 extends Base {
  f1(derived2: Derived2) {
    derived2.x = 10;
  }

  f2(derived1: Derived1) {
    derived1.x = 10; // Property 'x' is protected and only accessible within class 'Derived1' and its subclasses.
  }
}
```

But different instances of the same class can access each other's private fields.

```ts
class A {
  private x = 10;

  public sameAs(other: A) {
    // No error
    return other.x === this.x;
  }
}
```
