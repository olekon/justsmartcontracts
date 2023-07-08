import { TAddress } from "@shared/lib/web3";

export type NativeValue = string;

export type TTransactionParams = {
  from: TAddress;
  to?: TAddress;
  nonce: number;
  value: NativeValue;
  gas: number;
  maxFee: NativeValue;
  maxPriorityFee: NativeValue;
  data: string;
};
