import { parseUnits } from "viem";

export const stringToNative = (value: number | string): bigint => {
  return parseUnits(value as `${number}`, 0);
};
