import { Chain } from "@shared/lib/web3";
import { ChainConfig } from "../model";

export const getTxUrl = (chain: Chain, txHash: string) => {
  return `${ChainConfig[chain].explorer}tx/${txHash}`;
};
