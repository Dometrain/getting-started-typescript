// Prefer a plain JS object
const StatusObj = {
  Active: 0,
  Inactive: 1,
  Pending: 2,
  Deleted: 3,
} as const;

// Or a union type
type StatusUnion = "Active" | "Inactive" | "Pending" | "Deleted";
