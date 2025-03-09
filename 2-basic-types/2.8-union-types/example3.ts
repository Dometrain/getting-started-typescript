// Union type with literal types. Note singular name.
type Direction = "left" | "right" | "up" | "down";

function move(direction: Direction) {
  console.log(`Moving ${direction}`);
}
