import { contractModel } from "@entities/contract";
import { useCallback } from "react";

export const useEditContact = ({ id }: contractModel.TContract) => {
  const { update } = contractModel.useContracts();

  return useCallback(
    ({ chain, name, address, abi }: contractModel.TContractWithoutId) => {
      update(id, chain, address, name, abi);
    },
    [id, update]
  );
};
