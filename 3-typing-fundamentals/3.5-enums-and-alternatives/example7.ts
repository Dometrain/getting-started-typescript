// Enums support reverse mapping
enum Color {
  Red,
  Green,
  Blue,
}

const red = Color.Red;
let nameOfRed = Color[red]; // "Red"

// But string enums don't support it:
enum ColorNames {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

const redName = ColorNames.Red;
// This fails is noImplicitAny is true, so set temporarily to demonstrate:
let valueOfRedName = ColorNames[redName]; // Property 'red' does not exist on type 'typeof ColorNames'.
