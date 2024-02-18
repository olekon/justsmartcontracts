import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Chain } from "@shared/lib/web3";

type State = {
  chain: Chain;
};

type Actions = {
  update: (_chain: Chain) => void;
};

// TODO DELETE
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
  Chain.CRONOS,
  Chain.BASE,
  Chain.KAVA,
  Chain.MANTA,
  Chain.GNOSIS,
  Chain.CELO,
  Chain.MANTLE,
  Chain.FANTOM,
  Chain.MOONBEAM,
  Chain.LINEA,
  Chain.METIS,
  Chain.ASTAR,
  Chain.CANTO,
  Chain.AURORA,
  Chain.TELOS,
  Chain.OKXCHAIN,
  Chain.MOONRIVER,
  Chain.BOBA,
];

const useCurrentChainStore = create<State & Actions>()(
  persist(
    (set) => ({
      chain: 1,
      update: (chain: Chain) => set(() => ({ chain })),
    }),
    { name: "chain" }
  )
);

export const useCurrentChain = () => useCurrentChainStore((state) => state);
