import { TContract, contractModel } from "@entities/contract";
import { useCallback } from "react";

export const useRemoveContract = ({ chain, id }: TContract) => {
  const { remove, contracts, setCurrent } = contractModel.useContracts();

  return useCallback(() => {
    remove(id);

    // set as current first contract with the same chain or null
    const newCurrent = contracts.find((item) => item.chain == chain);
    setCurrent(newCurrent?.id ?? null);
  }, [chain, contracts, id, remove, setCurrent]);
};
