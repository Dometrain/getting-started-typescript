interface Person {
  name: string;
  age: number;
}

// This fails
// const person = new Person(); // Error: Cannot create an instance of an interface.

type PersonType = {
  name: string;
  age: number;
};

// This also fails
// const personType = new PersonType(); // Error: Cannot create an instance of a type.

// Instead, create an instance of an interface or Type via an object literal:
const alice: Person = {
  name: "Alice",
  age: 30,
};
