import { useMemo } from "react";
import {
  isAbiItemProperty,
  isAbiItemOperation,
  isAbiItemParamRead,
  isAbiItemEvent,
  isAbiItemConstructor,
  isAbiItemParamStaticCall,
} from "../lib";
import { TAbiItem, TContract } from "./types";

export const useContractProperties = (contract: TContract) => {
  return useMemo(() => contract.abi.filter(isAbiItemProperty), [contract.abi]);
};

export const useContractParamCalls = (contract: TContract) => {
  return useMemo(() => contract.abi.filter(isAbiItemParamRead), [contract.abi]);
};

export const useContractParamStaticCalls = (contract: TContract) => {
  return useMemo(
    () => contract.abi.filter(isAbiItemParamStaticCall),
    [contract.abi]
  );
};

export const useContractOperations = (contract: TContract) => {
  return useMemo(() => contract.abi.filter(isAbiItemOperation), [contract.abi]);
};

export const useContractEvents = (contract: TContract) => {
  return useMemo(() => contract.abi.filter(isAbiItemEvent), [contract.abi]);
};

export const useContractConstructor = (abi: TAbiItem[]) => {
  return useMemo(() => {
    const ctors = abi.filter(isAbiItemConstructor);
    return ctors.length ? ctors[0] : null;
  }, [abi]);
};
