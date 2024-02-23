import { chainModel } from "@entities/chain";
import { contractModel } from "@entities/contract";
import { TChainId } from "@shared/lib/web3";
import { useCallback } from "react";

export const useUpdateChain = () => {
  const { chain, update } = chainModel.useCurrentChain();
  const { setCurrent, contracts } = contractModel.useContracts();

  return useCallback(
    (newChain: TChainId) => {
      if (newChain != chain) {
        const newCurrent = contracts.find((item) => item.chain == newChain);
        setCurrent(newCurrent?.id ?? null);
        update(newChain);
      }
    },
    [chain, contracts, setCurrent, update]
  );
};
