Some features can only be implemented with `interface`:

1. Extend a class. Example:

```ts
class Animal {
  name = "animal";
}

interface Bear extends Animal {
  honey: boolean;
}

const bear: Bear = {
  name: "bear",
  honey: true,
};
```

1. Declaration merging

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Cory",
  age: 22,
};
```
