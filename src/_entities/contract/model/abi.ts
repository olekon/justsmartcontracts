import { useMemo } from "react";
import {
  isAbiItemProperty,
  isAbiItemOperation,
  isAbiItemParamCall,
  isAbiItemEvent,
} from "../lib";
import { TContract } from "./types";

export const useContractProperties = (contract: TContract) => {
  return useMemo(() => contract.abi.filter(isAbiItemProperty), [contract.abi]);
};

export const useContractParamCalls = (contract: TContract) => {
  return useMemo(() => contract.abi.filter(isAbiItemParamCall), [contract.abi]);
};

export const useContractOperations = (contract: TContract) => {
  return useMemo(() => contract.abi.filter(isAbiItemOperation), [contract.abi]);
};

export const useContractEvents = (contract: TContract) => {
  return useMemo(() => contract.abi.filter(isAbiItemEvent), [contract.abi]);
};
