# Static members

Static members are members of a class that are shared between all instances of that class. They are not tied to any particular instance, but rather to the class itself. This means that they are accessible without creating an instance of the class.

```ts
class MyClass {
  static myStaticProperty = 42;
  static myStaticMethod() {
    return "Hello";
  }
}

console.log(MyClass.myStaticProperty); // 42
console.log(MyClass.myStaticMethod()); // "Hello"
```

Static members can have access modifiers. For example, you can make a static property private:

```ts
class MyClass {
  private static myStaticProperty = 42;
  static myStaticMethod() {
    return MyClass.myStaticProperty;
  }
}

console.log(MyClass.myStaticProperty); // Error: Property 'myStaticProperty' is private and only accessible within class 'MyClass'.
```

Unlike C# or Java, static classes aren't supported. Why? Because they're unnecessary in TypeScript. C# and Java require everything to be in a class, but TypeScript doesn't. You can just use a bare function or an object literal instead.

```ts
// Unnecessary "static" class
class MyStaticClass {
  static doStuff() {}
}

// Prefer bare function
function doStuff() {}

// Or an object literal
const helper = {
  doStuff() {},
};
```

You can also declare a static block:

```ts
function loadLastInstances() {
  return []; // Load last instances from storage
}

class InstanceCounter {
  static #count = 0;

  get count() {
    return InstanceCounter.#count;
  }

  static {
    try {
      const lastInstances = loadLastInstances();
      InstanceCounter.#count += lastInstances.length;
    } catch {}
  }
}
```

This is useful for class-level initialization like:

- Setting up static properties based on complex logic.
- Establishing connections to external resources.
- or performing one-time operations related to the class.

Unlike a constructor, a static block executes only once when the class is first loaded in the environment.
