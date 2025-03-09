// Exercise: Structural vs Nominal Types in TypeScript

// Question 1:
// Invoke the logPersonName function below with an instance of an `Employee`.
// Note that it works because Employee has a structure that's compatible with person.

interface Person {
  name: string;
  age: number;
}

interface Employee {
  name: string;
  age: number;
  employeeId: number;
}

function logPersonName(person: Person): void {
  return console.log(person.name);
}

// Question 2: Comment out the age property on Employee. What happens?
