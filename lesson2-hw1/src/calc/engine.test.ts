import { firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";

describe("firstPrioritiesCalc simple cases", () => {
  it("[1, * 32]", () => {
    expect(firstPrioritiesCalc([1, "*", 32])).toEqual([32]);
  });

  it("[32, /, 32]", () => {
    expect(firstPrioritiesCalc([32, "/", 32])).toEqual([1]);
  });

  it("[32, + 32]", () => {
    expect(firstPrioritiesCalc([32, "+", 32])).toEqual([32, "+", 32]);
  });

  it("[32, !]", () => {
    expect(firstPrioritiesCalc([3, "!"])).toEqual([6]);
  });

  it("[4, **]", () => {
    expect(firstPrioritiesCalc([4, "**"])).toEqual([16]);
  });

  it("[2, ^, 3]", () => {
    expect(firstPrioritiesCalc([2, "^", 3])).toEqual([8]);
  });
});

describe("firstPrioritiesCalc mixed with second priorities cases", () => {
  it("[32, /, 32, +, 10, *, 10]", () => {
    expect(firstPrioritiesCalc([32, "/", 32, "+", 10, "*", 10])).toEqual([
      1,
      "+",
      100,
    ]);
  });

  it("[3, !, +, 2, ^, 3]", () => {
    expect(firstPrioritiesCalc([3, "!", "+", 2, "^", 3])).toEqual([6, "+", 8]);
  });

  it("[4, **, -, 10, *, 10]", () => {
    expect(firstPrioritiesCalc([4, "**", "-", 10, "*", 10])).toEqual([
      16,
      "-",
      100,
    ]);
  });
});

describe("secondPrioritiesCalc invalid cases", () => {
  it("[32, / 32]", () => {
    expect(() => secondPrioritiesCalc([32, "/", 32])).toThrow(
      TypeError("Unexpected stack!")
    );
  });

  it("[2, **]", () => {
    expect(() => secondPrioritiesCalc([2, "**"])).toThrow(
      TypeError("Unexpected stack!")
    );
  });

  it("[3, ^, 4]", () => {
    expect(() => secondPrioritiesCalc([3, "^", 4])).toThrow(
      TypeError("Unexpected stack!")
    );
  });

  it("[3, !]", () => {
    expect(() => secondPrioritiesCalc([3, "!"])).toThrow(
      TypeError("Unexpected stack!")
    );
  });
});

describe("secondPrioritiesCalc simple cases", () => {
  it("[32, + 32]", () => {
    expect(secondPrioritiesCalc([32, "+", 32])).toEqual(64);
  });

  it("[32, - 32]", () => {
    expect(secondPrioritiesCalc([32, "-", 32])).toEqual(0);
  });

  it("[32, - 32, +, 10]", () => {
    expect(secondPrioritiesCalc([32, "-", 32, "+", 10])).toEqual(10);
  });
});
