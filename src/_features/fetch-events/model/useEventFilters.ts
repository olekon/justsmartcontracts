import { useCallback, useMemo, useReducer } from "react";
import { produce } from "immer";
import { TAbiEvent } from "@entities/contract";
import { getDefaultValue } from "@entities/contract/lib";
import { TEventFilter, TEventFilters } from "./types";

type ActionType = "enable" | "add" | "remove" | "update";

type TAction = { param: string; type: ActionType } & (
  | {
      type: "enable";
      value: boolean;
    }
  | {
      type: "update";
      index: number;
      value: string;
    }
  | { type: "add" | "remove" }
);

const addValue = ({ type, values }: TEventFilter) =>
  values.push(String(getDefaultValue(type)));

const filterReducer = (filters: TEventFilters, action: TAction) => {
  const filter = filters[action.param];

  switch (action.type) {
    case "enable":
      filter.active = action.value;

      if (action.value && !filter.values.length) {
        addValue(filter);
      }
      break;

    case "update":
      filter.values[action.index] = action.value;
      break;

    case "add":
      addValue(filter);
      break;

    case "remove":
      filter.values.pop();
      break;
  }
};

const useInitialEventArgs = (event: TAbiEvent): TEventFilters => {
  return useMemo(() => {
    const indexedParams = event.inputs.filter(({ indexed }) => indexed);
    return indexedParams.reduce(
      (result, current, index) => ({
        ...result,
        [current.name || String(index)]: {
          active: false,
          type: current.type,
          values: [],
        },
      }),
      {}
    );
  }, [event.inputs]);
};

export const useEventFilters = (event: TAbiEvent) => {
  const initialValues = useInitialEventArgs(event);

  const [filters, dispatch] = useReducer(produce(filterReducer), initialValues);

  const enable = useCallback((param: string, value: boolean) => {
    dispatch({ type: "enable", param, value });
  }, []);

  const add = useCallback((param: string) => {
    dispatch({ type: "add", param });
  }, []);

  const remove = useCallback((param: string) => {
    dispatch({ type: "remove", param });
  }, []);

  const update = useCallback((param: string, index: number, value: string) => {
    dispatch({ type: "update", param, value, index });
  }, []);

  return {
    filters,
    enable,
    add,
    remove,
    update,
  };
};
