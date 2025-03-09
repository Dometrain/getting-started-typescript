// Top and bottom types
type CountingNumbers = 1 | 2 | 3 | 4 | 5;

type OrUnknown = CountingNumbers | unknown;
//   ^? unknown

type OrAny = CountingNumbers | any;
//   ^? any

type OrNever = CountingNumbers | never;
//   ^? 1 | 2 | 3 | 4 | 5
