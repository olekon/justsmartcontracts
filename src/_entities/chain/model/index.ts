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
  testnet?: boolean;
};

export const ChainConfig: Record<Chain, TChainConfig> = {
  [Chain.ETHEREUM]: {
    name: "Ethereum",
    explorer: "https://etherscan.io/",
  },

  [Chain.OPTIMISM]: {
    name: "Optimism",
    explorer: "https://optimistic.etherscan.io/",
  },
  [Chain.POLYGON]: {
    name: "Polygon",
    explorer: "https://polygonscan.com/",
  },
  [Chain.BSC]: {
    name: "BSC",
    explorer: "https://bscscan.com/",
  },
  [Chain.AVALANCHE]: {
    name: "Avalanche",
    explorer: "https://snowtrace.io/",
  },
  [Chain.ZKSYNC]: {
    name: "zkSync Era",
    explorer: "https://explorer.zksync.io/",
  },

  [Chain.ARBITRUM]: {
    name: "Arbitrum",
    explorer: "https://arbiscan.io/",
  },
  [Chain.ETH_GOERLI]: {
    name: "Goerli",
    explorer: "https://goerli.etherscan.io/",
    testnet: true,
  },
  [Chain.ETH_SEPOLIA]: {
    name: "Sepolia",
    explorer: "https://sepolia.etherscan.io/",
    testnet: true,
  },
};

export const SupportedChains = [
  Chain.ETHEREUM,
  Chain.ETH_GOERLI,
  Chain.ETH_SEPOLIA,
  Chain.ARBITRUM,
  Chain.AVALANCHE,
  Chain.BSC,
  Chain.OPTIMISM,
  Chain.POLYGON,
  Chain.ZKSYNC,
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
