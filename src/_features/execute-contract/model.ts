import { useContractRead } from "wagmi";
import { TAbiItem, TContract } from "@entities/contract";

export const useContractCall = (
  contract: TContract,
  abiItem: TAbiItem,
  args: string[]
) => {
  const { data, error, isLoading, refetch } = useContractRead({
    address: contract.address,
    abi: contract.abi,
    //@ts-ignore somehow TS thinks functionName is of undefined type
    functionName: abiItem.name,
    chainId: contract.chain,
    args,
  });

  return {
    data,
    error,
    loading: isLoading,
    refetch,
  };
};
