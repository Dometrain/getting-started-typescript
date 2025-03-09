// Exercise: Using readonly and as const

// 1. Mark age and address as readonly in the Person interface below.
// Then note that the modifications in the `updatePerson` function are not allowed.

interface Address {
  street: string;
  city: string;
}

interface Person {
  firstName: string;
  lastName: string;
  readonly age: number;
  readonly address: Address;
}

function updatePerson(person: Person) {
  // These fail as expected
  // person.age = 30; // Error: Cannot assign to 'age' because it is a read-only property.
  // Error: Cannot assign to 'address' because it is a read-only property.
  // person.address = { street: "New Street", city: "New City" };
}

// 2. Make the personConst below immutable by marking `as const`.
// Then note that you cannot mutate the properties of the object below.

const personConst = {
  firstName: "John",
  lastName: "Doe",
} as const;

// Fails, as expected
// personConst.firstName = "Jane"; // Error: Cannot assign to 'firstName' because it is a read-only property.
