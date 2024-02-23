import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { TChainId, TAddress } from "@shared/lib/web3";
import { TUid, uid } from "@shared/lib/id";
import { TAbiItem, TContract } from "./types";

type TState = {
  currentId: TUid | null;
  contracts: TContract[];
};

type TActions = {
  add: (
    _chain: TChainId,
    _address: TAddress,
    _name: string,
    _abi: TAbiItem[]
  ) => TContract;
  update: (
    _id: TUid,
    _chain?: TChainId,
    _address?: TAddress,
    _name?: string,
    _abi?: TAbiItem[]
  ) => void;
  remove: (_id: TUid) => void;
  setCurrent: (_id: TUid | null) => void;
};

const useContractStore = create<TState & TActions>()(
  persist(
    immer((set) => ({
      contracts: [],
      currentId: null,

      add: (
        chain: TChainId,
        address: TAddress,
        name: string,
        abi: TAbiItem[]
      ) => {
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

      update: (
        id: TUid,
        chain?: TChainId,
        address?: TAddress,
        name?: string,
        abi?: TAbiItem[]
      ) => {
        set((s: TState) => {
          const contract = s.contracts.find((c) => c.id == id);
          if (contract) {
            if (chain) {
              contract.chain = chain;
            }
            if (address) {
              contract.address = address;
            }
            if (name) {
              contract.name = name;
            }
            if (abi) {
              contract.abi = abi;
            }
          }
        });
      },

      remove: (id: TUid) => {
        set((s: TState) => {
          s.contracts = s.contracts.filter((c) => c.id != id);
        });
      },

      setCurrent: (id: TUid | null) => {
        set((s: TState) => {
          s.currentId = id;
        });
      },
    })),
    { name: "contracts_" }
  )
);

export const useContracts = () => useContractStore((state) => state);
