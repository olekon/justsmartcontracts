import { useMemo } from "react";
import { chainModel } from "@entities/chain";
import { contractModel } from "@entities/contract";

export const useCurrentChainContracts = () => {
  const { chain } = chainModel.useCurrentChain();
  const { contracts } = contractModel.useContracts();

  return useMemo(
    () => contracts.filter((item) => item.chain === chain),
    [chain, contracts]
  );
};
