import type { TAbiItem } from "../model/store";

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
