// Consider using a const object instead of an enum
const Colors = {
  Red: "red",
  Green: "green",
  Blue: "blue",
} as const;

// To pass a list of colors to a function, use keyof typeof
function printColors(color: keyof typeof Colors) {
  console.log(color);
}

printColors("Red");
