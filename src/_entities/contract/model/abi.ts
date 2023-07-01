import { useMemo } from "react";
import {
  isAbiItemProperty,
  isAbiItemFunction,
  isAbiItemParamCall,
  isAbiItemEvent,
} from "../lib";
import { TContract } from "./store";

export const useContractProperties = (contract: TContract) => {
  return useMemo(() => contract.abi.filter(isAbiItemProperty), [contract.abi]);
};

export const useContractParamCalls = (contract: TContract) => {
  return useMemo(() => contract.abi.filter(isAbiItemParamCall), [contract.abi]);
};

export const useContractFunctions = (contract: TContract) => {
  return useMemo(() => contract.abi.filter(isAbiItemFunction), [contract.abi]);
};

export const useContractEvents = (contract: TContract) => {
  return useMemo(() => contract.abi.filter(isAbiItemEvent), [contract.abi]);
};
