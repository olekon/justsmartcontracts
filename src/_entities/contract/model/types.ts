import { TUid } from "@shared/lib/id";
import { AbiItem as ViemAbiItem } from "viem";
import type {
  AbiParameter as ViemAbiParameter,
  AbiEvent as ViemAbiEvent,
  AbiFunction as ViemAbiFunction,
} from "abitype";
import { Chain, TAddress } from "@shared/lib/web3";

export type TAbiEvent = ViemAbiEvent;
export type TAbiFunction = ViemAbiFunction;
export type TAbiItem = ViemAbiItem;

export type TAbiParam = ViemAbiParameter;

export type TContract = {
  id: TUid;
  chain: Chain;
  address: TAddress;
  name: string;
  abi: TAbiItem[];
};

export type TContractWithoutId = Omit<TContract, "id">;