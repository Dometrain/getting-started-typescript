// Exercise: Type Intersections in TypeScript

// Question 1:
// Given the two interfaces below, create a new type `Staff`
// that's an intersection of `Person` and `Employee`.
// Then, create a variable `staff` of type `Staff` and assign some values to it.

interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

// Answer:
type Staff = Person & Employee;

const staffMember: Staff = {
  name: "John Doe",
  age: 30,
  employeeId: 12345,
  department: "Engineering",
};
