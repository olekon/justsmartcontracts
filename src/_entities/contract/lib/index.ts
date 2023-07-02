import type { TAbiItem, TAbiParam } from "../model/types";

import { AbiEvent, AbiFunction } from "abitype";

const isReadonlyFunction = (item: TAbiItem): item is AbiFunction =>
  item.type == "function" &&
  (item.stateMutability == "pure" || item.stateMutability == "view");

const isWriteFunction = (item: TAbiItem): item is AbiFunction =>
  item.type == "function" && !isReadonlyFunction(item);

export const isAbiItemProperty = (item: TAbiItem): item is AbiFunction =>
  isReadonlyFunction(item) && item.inputs.length == 0;

export const isAbiItemParamCall = (item: TAbiItem): item is AbiFunction =>
  isReadonlyFunction(item) && item.inputs.length !== 0;

export const isAbiItemFunction = (item: TAbiItem): item is AbiFunction =>
  isWriteFunction(item);

export const isAbiItemEvent = (item: TAbiItem): item is AbiEvent =>
  item.type === "event";

const isArrayType = (param: TAbiParam) => param.type.endsWith("]");

export const getArrayItemType = (param: TAbiParam) => param.type.slice(0, -2);

export const getDefaultValue = (param: TAbiParam) => {
  switch (param.type) {
    case "bool":
      return false;
    case "address":
      return "0x0000000000000000000000000000000000000000";
    case "eth":
    case "ether":
      return "0";
    default:
      if (isArrayType(param)) {
        return [];
      } else {
        return "";
      }
  }
};
