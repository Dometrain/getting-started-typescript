# Union Types

Union types represent value that can be one of multiple types. For example, this function accepts an id that can be a `string` or a `number`.

Here's an example:

```ts
function printId(id: number | string) {
  console.log(`ID: ${id}`);
}
```

The vertical bar can be read as "OR". In this example, `id` can be a `number` or a `string`. This is useful when you want to accept multiple types.

You can also declare a named union type:

```ts
type Id = number | string;
```

And then use it like this:

```ts
function printIdNamed(id: Id) {
  console.log(`ID: ${id}`);
}
```

Union types are also often useful with literal types. For example, a function that can accept a specific set of strings:

```ts
type Direction = "left" | "right" | "up" | "down";

function move(direction: Direction) {
  console.log(`Moving ${direction}`);
}
```

It may look like a string, but it's actually a union type. Note that autocomplete and rename refactorings work with union types.

Union types are often a good alternative to enums. Expecially when [the left and right hand side match](https://x.com/housecor/status/1878836954969579947).

Avoid putting top types in a union since they "win" over other types, and thus, widen the union to the point where it's not useful.

```ts
type CountingNumbers = 1 | 2 | 3 | 4 | 5;

type OrUnknown = CountingNumbers | unknown;
//   ^? unknown

type OrAny = CountingNumbers | any;
//   ^? any
```

The bottom type `never` is ignored in a union.

```ts
type OrNever = CountingNumbers | never;
//   ^? 1 | 2 | 3 | 4 | 5
```

Can union objects too.

```ts
type Vehicle = { hasWheels: boolean } | { canFly: boolean };

const car: Vehicle = { hasWheels: true };
const airplane: Vehicle = { canFly: true };
const flyingCar: Vehicle = { hasWheels: true, canFly: true };
flyingCar.hasWheels = true; // doesn't work since Vehicle specifies that it must have either hasWheels or canFly
```

# Next up

Alright, this wraps up section 2. Next up, let's explore more TypeScript fundamentals including intersections, immutability, enumerations, interfaces and more.
