import { Employee, Person } from "./person.types";
// 1. Create person.types.ts. Add a type alias named `Person` with the following properties:
//    - name: string
//    - age: number
//    - email: string

// 2. In person.types.ts, define an interface named `Employee` that extends the `Person` type and adds the following properties:
//    - employeeId: number
//    - department: string

// 3. Export both the `Person` type and the `Employee` interface.

// 4. Import the `Person` type and `Employee` interface at the top of this file.

// 5. Create a variable named `person` of type `Person` and assign the required values to its properties.
const person: Person = {
  name: "Cory House",
  age: 21, // I wish
  email: "cory@example.com",
};

// 6. Create a variable named `employee` of type `Employee` and assign appropriate values to its properties.
const employee: Employee = {
  name: "Cory House",
  age: 21, // I wish
  email: "cory@example.com",
  employeeId: 12345,
  department: "Engineering",
};
