function example(x: string | number) {
  if (typeof x === "string") {
    x.toUpperCase();
  } else if (typeof x === "number") {
    x.toFixed(2);
  } else {
    const _exhaustiveCheck: never = x; // type 'never' applies if we forget to handle a value in the union
    return _exhaustiveCheck;
  }
}
