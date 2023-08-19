import { TAddress, THexString } from "@shared/lib/web3";

export type TNativeValue = string;

export type TTransactionParams = {
  from: TAddress;
  to: TAddress;
  nonce: number;
  value: TNativeValue;
  gas: number;
  maxFee: TNativeValue;
  maxPriorityFee: TNativeValue;
  data: THexString;
};
