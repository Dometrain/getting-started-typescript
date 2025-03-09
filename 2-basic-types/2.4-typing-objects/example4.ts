// Use index signature [key: string] to allow any other properties
interface UserWithAnyProperties {
  id: number;
  name: string;
  [key: string]: any;
}

const user: UserWithAnyProperties = {
  id: 5,
  name: "Cory",
  age: 1,
};
