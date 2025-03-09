// Enums are actually objects that exist at runtime, so they can be passed to functions
enum Color {
  Red,
  Green,
  Blue,
}

function printColor(color: Color) {
  console.log(color);
}

printColor(Color.Red);
