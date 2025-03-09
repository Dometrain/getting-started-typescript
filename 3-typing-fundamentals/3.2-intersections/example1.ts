// Type intersections

type User = { name: string };
type Admin = { role: string };

type UserAdmin = User & Admin;

const user: UserAdmin = {
  name: "Max",
  role: "Admin",
};
