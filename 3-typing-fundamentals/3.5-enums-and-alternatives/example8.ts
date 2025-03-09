// const enum is a way to tell TypeScript to remove the enum from the
// generated code and replace it with the actual values
// Note: const enums can't have computed members. They can only have constant members.
const enum ColorConst {
  Red,
  Green,
  Blue,
}

const color = ColorConst.Red;
console.log(color);
