import { parser } from "./parser";

describe("Parser correct cases", () => {
  it("1 + 32", () => {
    expect(parser("1 + 32")).toEqual([1, "+", 32]);
  });

  it("1 ! + 32", () => {
    expect(parser("1 ! + 32")).toEqual([1, "!", "+", 32]);
  });

  it("3 ** + 5", () => {
    expect(parser("3 ** + 5")).toEqual([3, "**", "+", 5]);
  });

  it("4 ^ 2 + 6", () => {
    expect(parser("4 ^ 2 + 6")).toEqual([4, "^", 2, "+", 6]);
  });

  it("11 + 3 * 22", () => {
    expect(parser("11 + 3 * 22")).toEqual([11, "+", 3, "*", 22]);
  });

  it("1 + 32 - 2 + 2", () => {
    expect(parser("1 + 32 - 2 + 2")).toEqual([1, "+", 32, "-", 2, "+", 2]);
  });
});

describe("Parser invalid cases", () => {
  it("1 + + 33 - 2", () => {
    expect(() => parser("1 + + 33 - 2")).toThrow(
      TypeError("Unexpected string")
    );
  });

  it("1 ! 33 - 2", () => {
    expect(() => parser("1 ! 33 - 2")).toThrow(TypeError("Unexpected string"));
  });
});
