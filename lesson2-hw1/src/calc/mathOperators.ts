export type ScalarOperationType = (first: number, second: number) => number;
export type UnaryOperationType = (arg: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const factorial: UnaryOperationType = (arg: number): number => {
  if (arg <= 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= arg; i++) {
    result = result * i;
  }
  return result;
};

export const exp: ScalarOperationType = (
  first: number,
  second: number
): number => first ** second;

export const sqr: UnaryOperationType = (first: number): number => first * first;

export const mathOperators: {
  [key: string]: ScalarOperationType | UnaryOperationType;
} = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "**": sqr,
  "^": exp,
  "!": factorial,
};

export const mathPriorities: number[] = [1, 2];

const [FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "+": SECOND,
  "-": SECOND,
  "**": FIRST,
  "^": FIRST,
  "!": FIRST,
};

export const mathUnaryTypes: number[] = [1, 2];

const [UNARY, BINARY] = mathUnaryTypes;

export const mathOperatorsUnaryType: { [key: string]: number } = {
  "*": BINARY,
  "/": BINARY,
  "+": BINARY,
  "-": BINARY,
  "**": UNARY,
  "^": BINARY,
  "!": UNARY,
};
