import { TChainId } from "@shared/lib/web3";

export type TChain = {
  chain: string;
  chainId: TChainId;
  explorers: {
    name: string;
    url: string;
  }[];
  name: string;
  rpc: string[];
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
};
