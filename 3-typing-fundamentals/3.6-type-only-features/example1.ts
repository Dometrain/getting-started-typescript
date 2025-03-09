// type and interface are often interchangeable
type UserType = { name: string; age: number };

interface UserInterface {
  name: string;
  age: number;
}

// Both can describe a function signature too
type UserFunctionType = (name: string, age: number) => void;

interface UserFunctionInterface {
  (name: string, age: number): void;
}
