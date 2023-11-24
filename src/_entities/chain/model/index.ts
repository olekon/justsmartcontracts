import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Chain } from "@shared/lib/web3";

type State = {
  chain: Chain;
};

type Actions = {
  update: (_chain: Chain) => void;
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
  Chain.POLYGON_MUMBAI,
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
