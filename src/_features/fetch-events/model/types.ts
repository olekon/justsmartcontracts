import { TAbiParamType } from "@entities/contract";

export type TEventArgs = {
  fromBlock?: number;
  toBlock?: number;
};

export type TEventFilter = {
  active: boolean;
  type: TAbiParamType;
  values: string[];
};

export type TEventFilters = Record<string, TEventFilter>;
