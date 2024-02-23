import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TChainId } from "@shared/lib/web3";

type State = {
  chain: TChainId;
};

type Actions = {
  update: (_chain: TChainId) => void;
};

const useCurrentChainStore = create<State & Actions>()(
  persist(
    (set) => ({
      chain: 1,
      update: (chain: TChainId) => set(() => ({ chain })),
    }),
    { name: "chain" }
  )
);

export const useCurrentChain = () => useCurrentChainStore((state) => state);
