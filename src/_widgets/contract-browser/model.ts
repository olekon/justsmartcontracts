import { contractModel } from "@entities/contract";
import { getContract } from "viem";

export const useContractProperties = (contract: contractModel.TContract) => {
  const instance = getContract({
    address: contract.address,
    abi: contract.abi,
  });
};
