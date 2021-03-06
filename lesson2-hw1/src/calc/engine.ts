import { ParsedLineType } from "./parser";
import { isNumber } from "./helpers";
import {
  mathOperators,
  mathPriorities,
  mathOperatorsPriorities,
  mathOperatorsUnaryType,
  mathUnaryTypes,
} from "./mathOperators";

const [FIRST, SECOND] = mathPriorities;

const [UNARY, BINARY] = mathUnaryTypes;

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (
      !isNumber(String(item)) &&
      mathOperatorsPriorities[item] === FIRST &&
      mathOperatorsUnaryType[item] === BINARY
    ) {
      if (!mathOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else if (
      !isNumber(String(nextItem)) &&
      mathOperatorsPriorities[nextItem] === FIRST &&
      mathOperatorsUnaryType[nextItem] === UNARY
    ) {
      if (!mathOperators[nextItem]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -1),
        mathOperators[nextItem](Number(item), 0),
      ];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (
      mathOperatorsPriorities[item] === FIRST ||
      mathOperatorsPriorities[nextItem] === FIRST
    ) {
      throw new TypeError("Unexpected stack!");
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
      result = mathOperators[item](Number(result), Number(nextItem));
    }
    return result;
  }, Number(stack[0]));
