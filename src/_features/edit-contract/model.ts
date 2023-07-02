import {
  TContract,
  TContractWithoutId,
  contractModel,
} from "@entities/contract";
import { useCallback } from "react";

export const useEditContact = ({ id }: TContract) => {
  const { update } = contractModel.useContracts();

  return useCallback(
    ({ chain, name, address, abi }: TContractWithoutId) => {
      update(id, chain, address, name, abi);
    },
    [id, update]
  );
};
