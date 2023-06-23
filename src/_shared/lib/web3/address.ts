export type TAddress = `0x${string}`;

export const sameAddress = (a: TAddress, b: TAddress) =>
  a.toLowerCase() === b.toLowerCase();
