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
  explorer: string;
};

export const ChainConfig: Record<Chain, TChainConfig> = {
  [Chain.ETHEREUM]: {
    name: "Ethereum",
    explorer: "https://etherscan.io/",
  },
  [Chain.ARBITRUM]: {
    name: "Arbitrum",
    explorer: "https://arbiscan.io/",
  },
  [Chain.ETH_GOERLI]: {
    name: "Goerli",
    explorer: "https://goerli.etherscan.io/",
  },
  [Chain.ETH_SEPOLIA]: {
    name: "Sepolia",
    explorer: "https://sepolia.etherscan.io/",
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
