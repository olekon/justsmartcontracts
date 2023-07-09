import { parseUnits } from "viem";

export const stringToNative = (value?: number | string): bigint => {
  return parseUnits((value ?? "0") as `${number}`, 0);
};
