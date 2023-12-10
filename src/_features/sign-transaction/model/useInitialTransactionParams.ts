import { useMemo } from "react";
import { useFeeData } from "wagmi";
import { TTransactionParams } from "@shared/lib/tx";
import { encodeFunctionData } from "viem";
import { TAbiFunction, TContract, contractUtils } from "@entities/contract";

export const useInitialTransactionParams = (
  contract: TContract,
  abiItem: TAbiFunction,
  args: string[]
) => {
  const { data: feeData } = useFeeData();

  return useMemo(() => {
    const wrappedArraysArgs = args.map((arg, index) => {
      return contractUtils.isArrayType(abiItem.inputs[index].type)
        ? arg.split(",").map((item) => item.trim())
        : arg;
    });

    const values: Partial<TTransactionParams> = {
      data: encodeFunctionData({
        abi: contract.abi,
        args: wrappedArraysArgs,
        functionName: abiItem.name,
      }),
      to: contract.address,
      maxFee: "0",
      maxPriorityFee: "0",
    };

    if (feeData?.maxFeePerGas) {
      values.maxFee = feeData.maxFeePerGas.toString();
    }

    if (feeData?.maxPriorityFeePerGas) {
      values.maxPriorityFee = feeData.maxPriorityFeePerGas.toString();
    }

    return values;
  }, [
    abiItem.inputs,
    abiItem.name,
    args,
    contract.abi,
    contract.address,
    feeData?.maxFeePerGas,
    feeData?.maxPriorityFeePerGas,
  ]);
};
