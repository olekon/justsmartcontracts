import type { TAbiItem, TAbiParamType } from "../model/types";

import { AbiConstructor, AbiEvent, AbiFunction } from "abitype";

const isFunction = (item: TAbiItem): item is AbiFunction =>
  item.type == "function";

const isReadonlyFunction = (item: TAbiItem): item is AbiFunction =>
  isFunction(item) &&
  (item.stateMutability == "pure" || item.stateMutability == "view");

const isWriteFunction = (item: TAbiItem): item is AbiFunction =>
  isFunction(item) && !isReadonlyFunction(item);

export const isAbiItemProperty = (item: TAbiItem): item is AbiFunction =>
  isReadonlyFunction(item) && item.inputs.length == 0;

export const isAbiItemParamRead = (item: TAbiItem): item is AbiFunction =>
  isReadonlyFunction(item);

export const isAbiItemParamStaticCall = (item: TAbiItem): item is AbiFunction =>
  isFunction(item);

export const isAbiItemOperation = (item: TAbiItem): item is AbiFunction =>
  isWriteFunction(item);

export const isAbiItemEvent = (item: TAbiItem): item is AbiEvent =>
  item.type === "event";

export const isAbiItemConstructor = (item: TAbiItem): item is AbiConstructor =>
  item.type === "constructor";

export const isArrayType = (param: TAbiParamType) => param.endsWith("]");

export const getArrayItemType = (param: TAbiParamType) => param.slice(0, -2);

export const getDefaultValue = (param: TAbiParamType) => {
  switch (param) {
    case "bool":
      return false;
    case "address":
      return "0x0000000000000000000000000000000000000000";
    case "eth":
    case "ether":
    case "uint256":
    case "uint128":
    case "uint64":
    case "uint32":
    case "uint16":
    case "uint8":
      return "0";
    default:
      if (isArrayType(param)) {
        return [];
      } else {
        return "";
      }
  }
};
