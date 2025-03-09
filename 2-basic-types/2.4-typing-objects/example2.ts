// Interface
interface User {
  id: number;
  name: string;
}

const cory: User = { id: 1, name: "Cory" };

// Errors if I forget property
// const user1: User = { id: 1 };

// Errors if I add an extra property
// const user2: User = { id: 2, name: "Cory", age: 1 };
