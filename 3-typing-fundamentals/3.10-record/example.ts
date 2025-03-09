type UserAges = Record<string, number>;

const userAges: UserAges = {
  Alice: 30,
  Bob: 25,
  Charlie: 35,
};

console.log(userAges);

// Index signature equivalent:
type UserAges2 = { [key in string]: number };
