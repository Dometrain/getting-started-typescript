// Can explicitly accept undefined using a union type,
// but then age MUST be specified.
type User2 = {
  name: string;
  age: number | undefined;
};

const bob: User2 = {
  name: "Bob",
  age: undefined, // Error if not specified
};
