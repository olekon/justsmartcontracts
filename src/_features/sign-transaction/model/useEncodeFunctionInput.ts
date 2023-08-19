import { useMemo, useState } from "react";
import { TAbiFunction, TContract } from "@entities/contract";
import { encodeFunctionData } from "viem";

//TODO remove unused
export const useEncodeFunctionInputs = (
  contract: TContract,
  abiItem: TAbiFunction
) => {
  const [args, setArgs] = useState<string[] | null>(null);

  const data = useMemo(() => {
    if (args) {
      return encodeFunctionData({
        abi: contract.abi,
        args: args,
        functionName: abiItem.name,
      });
    }
    return null;
  }, [abiItem.name, args, contract.abi]);

  return {
    updateArgs: (values: string[]) => setArgs(values),
    encodedData: data,
  };
};
