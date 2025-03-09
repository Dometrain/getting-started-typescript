// Could use union, but doesn't enforce matching types for a and b
function add(a: number | string, b: number | string) {
  // return a + b; // doesn't work
  return (a as any) + b; // works, but ugly
}
