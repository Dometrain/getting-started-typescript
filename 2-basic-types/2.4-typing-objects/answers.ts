// Exercise: Typing Objects in TypeScript

// Question 1: Create an object literal representing a book with the following properties:
// - title: string
// - author: string
// - pages: number

// Answer:
const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  pages: 281,
};

// Question 2: If you try adding another property to the object literal book object, does TypeScript allow it?

// Answer:
// No, TypeScript won't allow adding additional properties to the object.

// Question 3: Define an interface `Car` with the following properties:
// - make: string
// - model: string
// - year: number
// Then, create an object that conforms to this interface.

// Answer:
interface Car {
  make: string;
  model: string;
  year: number;
}

const myCar: Car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

// Question 4: Define a type alias called `Car2` with the same shape as `Car`.
// Then, create an object that conforms to this type alias.

// Answer:
type Car2 = {
  make: string;
  model: string;
  year: number;
};

const myCar2: Car2 = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

// Question 5: Create an interface called `Car3` with the same shape as `Car`, but allow any additional properties to be added.
// Answer:
interface Car3 {
  make: string;
  model: string;
  year: number;
  [key: string]: any;
}

const car3: Car3 = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "red", // additional property allowed
};
