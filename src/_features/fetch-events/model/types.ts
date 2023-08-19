import { TAbiParamType } from "@entities/contract";

export type TEventBlockFilter = {
  fromBlock?: string | number;
  toBlock?: string | number;
};

export type TEventFilter = {
  active: boolean;
  type: TAbiParamType;
  values: string[];
};

export type TEventFilters = Record<string, TEventFilter>;

export type TEventQuery = TEventBlockFilter & { topics: TEventFilters };
