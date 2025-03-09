type User = {
  name: string;
  age?: number;
};

// Since age is optional, we can omit it
const cory: User = {
  name: "Cory",
};

// or can explicitly set it to undefined
const alice: User = {
  name: "Alice",
  age: undefined,
};
