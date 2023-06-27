import { AbiItem } from "viem";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { Chain, TAddress } from "@shared/lib/web3";
import { TUid, uid } from "@shared/lib/id";

export type TContract = {
  id: TUid;
  chain: Chain;
  address: TAddress;
  name: string;
  abi: AbiItem[];
};

type TState = {
  currentId: TUid | null;
  contracts: TContract[];
};

type TActions = {
  add: (
    chain: Chain,
    address: TAddress,
    name: string,
    abi: AbiItem[]
  ) => TContract;
  remove: (id: TUid) => void;
  setCurrent: (id: TUid) => void;
};

const useContractStore = create<TState & TActions>()(
  persist(
    immer((set) => ({
      contracts: [],
      currentId: null,

      add: (chain: Chain, address: TAddress, name: string, abi: AbiItem[]) => {
        const contract = {
          chain,
          address,
          name,
          abi,
          id: uid(),
        };
        set((s: TState) => {
          s.contracts.push(contract);
        });
        return contract;
      },

      remove: (id: TUid) => {
        set((s: TState) => {
          s.contracts = s.contracts.filter((c) => c.id != id);
        });
      },

      setCurrent: (id: TUid) => {
        set((s: TState) => {
          s.currentId = id;
        });
      },
    })),
    { name: "contracts" }
  )
);

export const useContracts = () => useContractStore((state) => state);
