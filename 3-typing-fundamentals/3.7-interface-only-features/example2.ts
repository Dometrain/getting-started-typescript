// Interface only features
// 2. Declaration merging
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Cory",
  age: 22,
};
