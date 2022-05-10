import { isOperator, isOperatorBinary, isOperatorUnary } from "./mathOperators";
import { isNumber } from "./helpers";

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    const isValidNumberPush =
      (prevItem === undefined || isOperatorBinary(prevItem)) && isNumber(item);
    const isValidOperatorPush =
      ((prevItem === undefined || isNumber(prevItem)) && isOperator(item)) ||
      ((prevItem === undefined || isOperatorUnary(prevItem)) &&
        isOperatorBinary(item));

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidOperatorPush) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }
    return result;
  }, []);
};
