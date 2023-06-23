import { AbiItem } from "viem";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { Chain, TAddress, sameAddress } from "@shared/lib/web3";

export type TContract = {
  chain: Chain;
  address: TAddress;
  abi: AbiItem[];
};

type TState = {
  current: TContract | null;
  contracts: TContract[];
};

type TActions = {
  add: (contract: TContract) => void;
  remove: (contract: TContract) => void;
  setCurrent: (contract: TContract) => void;
};

const useContractStore = create<TState & TActions>()(
  persist(
    immer((set) => ({
      contracts: [],
      current: null,
      add: (contract: TContract) => {
        set((s: TState) => {
          s.contracts.push(contract);
        });
      },
      remove: (contract: TContract) => {
        set((s: TState) => {
          s.contracts = s.contracts.filter(
            (c) =>
              c.chain != contract.chain ||
              !sameAddress(c.address, contract.address)
          );
        });
      },
      setCurrent: (contract: TContract) => {
        set((s: TState) => {
          s.current = contract;
        });
      },
    })),
    { name: "contracts" }
  )
);

export const useContracts = () => useContractStore((state) => state);
