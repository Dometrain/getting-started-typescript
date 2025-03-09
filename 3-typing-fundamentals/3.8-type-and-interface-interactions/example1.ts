// Interface can extend type
type User = { name: string };

interface UserWithAge extends User {
  age: number;
}
