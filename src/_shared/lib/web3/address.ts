import { isAddress } from "viem";

export type THexString = `0x${string}`;

export type TAddress = THexString;

export const sameAddress = (a: TAddress, b: TAddress) =>
  a.toLowerCase() === b.toLowerCase();

export const isEvmAddress = (a: string): a is TAddress => {
  return isAddress(a);
};
