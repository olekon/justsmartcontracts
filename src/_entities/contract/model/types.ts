import { TUid } from "@shared/lib/id";
import { GetLogsReturnType, AbiItem as ViemAbiItem } from "viem";
import type {
  AbiParameter as ViemAbiParameter,
  AbiEvent as ViemAbiEvent,
  AbiConstructor as ViemAbiConstructor,
  AbiFunction as ViemAbiFunction,
} from "abitype";
import { TChainId, TAddress } from "@shared/lib/web3";

export type TAbiConstructor = ViemAbiConstructor;
export type TAbiEvent = ViemAbiEvent;
export type TAbiFunction = ViemAbiFunction;
export type TAbiItem = ViemAbiItem;

export type TAbiParam = ViemAbiParameter;
export type TAbiParamType = TAbiParam["type"];

export type TEventLogs = GetLogsReturnType<ViemAbiEvent>;

export type TContract = {
  id: TUid;
  chain: TChainId;
  address: TAddress;
  name: string;
  abi: TAbiItem[];
};

export type TContractWithoutId = Omit<TContract, "id">;
