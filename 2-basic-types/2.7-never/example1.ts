// Never - TypeScript's only bottom type
function fail(message: string): never {
  throw new Error(message);
}
