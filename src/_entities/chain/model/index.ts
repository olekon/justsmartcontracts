import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Chain } from "@shared/lib/web3";

type State = {
  chain: Chain;
};

type Actions = {
  update: (chain: Chain) => void;
};

type TChainConfig = {
  name: string;
};

export const ChainConfig: Record<Chain, TChainConfig> = {
  [Chain.ETHEREUM]: {
    name: "Ethereum",
  },
  [Chain.ARBITRUM]: {
    name: "Arbitrum",
  },
  [Chain.ETH_GOERLI]: {
    name: "Goerli",
  },
  [Chain.ETH_SEPOLIA]: {
    name: "Sepolia",
  },
};

export const SupportedChains = [
  Chain.ETHEREUM,
  Chain.ETH_GOERLI,
  Chain.ARBITRUM,
];

const useCurrentChainStore = create<State & Actions>()(
  persist(
    (set) => ({
      chain: SupportedChains[0],
      update: (chain: Chain) => set(() => ({ chain })),
    }),
    { name: "chain" }
  )
);

export const useCurrentChain = () => useCurrentChainStore((state) => state);
