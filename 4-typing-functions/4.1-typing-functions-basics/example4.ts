// can also declare the type of a function variable:
const multiply: (a: number, b: number) => number = function (a, b) {
  return a * b;
};

// Or, can use arrow syntax
const divide: (a: number, b: number) => number = (a, b) => {
  return a / b;
};
