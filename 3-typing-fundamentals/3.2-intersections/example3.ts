// Prettify utility makes intersections more readable

type User = { name: string } & { age: number };

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

type PrettyUser = Prettify<User>;
// ^? { name: string; age: number; }

// Or, can use https://marketplace.visualstudio.com/items?itemName=MylesMurphy.prettify-ts
