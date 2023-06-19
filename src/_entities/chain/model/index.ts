import { create } from "zustand";

import { Chain } from "@shared/lib/web3";

export const SupportedChains = [Chain.ETHEREUM, Chain.ETH_GOERLI];

type State = {
  chain: Chain;
};

type Actions = {
  update: (chain: Chain) => void;
};
export const useCurrentChain = create<State & Actions>((set) => ({
  chain: SupportedChains[0],
  update: (chain: Chain) => set(() => ({ chain })),
}));
