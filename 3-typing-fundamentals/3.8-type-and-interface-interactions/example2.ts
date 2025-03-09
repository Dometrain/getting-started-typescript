// Type can extend interface
interface User {
  name: string;
}
type UserWithAge = User & { age: number };
