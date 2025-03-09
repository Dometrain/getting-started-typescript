declare namespace pluralize {
  /** Pluralize a word. */
  function plural(word: string): string;
  /** Singularize a word */
  function singular(word: string): string;
}

export = pluralize;

// Or, declare a const object:

// declare function plural(word: string): string;
// declare function singular(word: string): string;

// declare const pluralize: {
//   plural: typeof plural;
//   singular: typeof singular;
// };

// export = pluralize;
