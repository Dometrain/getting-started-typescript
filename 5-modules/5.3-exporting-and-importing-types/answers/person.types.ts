export type Person = {
  name: string;
  age: number;
  email: string;
};

export interface Employee extends Person {
  employeeId: number;
  department: string;
}
