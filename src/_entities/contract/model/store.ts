import { AbiItem as ViemAbiItem } from "viem";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { Chain, TAddress } from "@shared/lib/web3";
import { TUid, uid } from "@shared/lib/id";
import type {
  AbiEvent as ViemAbiEvent,
  AbiFunction as ViemAbiFunction,
} from "abitype";

export type TAbiEvent = ViemAbiEvent;
export type TAbiFunction = ViemAbiFunction;
export type TAbiItem = ViemAbiItem;

export type TContract = {
  id: TUid;
  chain: Chain;
  address: TAddress;
  name: string;
  abi: TAbiItem[];
};

export type TContractWithoutId = Omit<TContract, "id">;

type TState = {
  currentId: TUid | null;
  contracts: TContract[];
};

type TActions = {
  add: (
    chain: Chain,
    address: TAddress,
    name: string,
    abi: TAbiItem[]
  ) => TContract;
  update: (
    id: TUid,
    chain?: Chain,
    address?: TAddress,
    name?: string,
    abi?: TAbiItem[]
  ) => void;
  remove: (id: TUid) => void;
  setCurrent: (id: TUid | null) => void;
};

const useContractStore = create<TState & TActions>()(
  persist(
    immer((set) => ({
      contracts: [],
      currentId: null,

      add: (chain: Chain, address: TAddress, name: string, abi: TAbiItem[]) => {
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
        chain?: Chain,
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
    { name: "contracts" }
  )
);

export const useContracts = () => useContractStore((state) => state);
