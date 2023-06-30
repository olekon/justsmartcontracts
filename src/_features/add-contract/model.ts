import { contractModel } from "@entities/contract";
import { useCallback } from "react";

export const useAddContact = () => {
  const { add, setCurrent } = contractModel.useContracts();

  return useCallback(
    ({ chain, name, address, abi }: contractModel.TContractWithoutId) => {
      const { id } = add(chain, address, name, abi);
      setCurrent(id);
    },
    [add, setCurrent]
  );
};
