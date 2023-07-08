import { useCallback, useEffect, useMemo, useState } from "react";
import { TAbiFunction, TContract } from "@entities/contract";
import { encodeFunctionData } from "viem";
import { TTransactionParams } from "@shared/lib/tx";
import { usePublicClient } from "wagmi";
import { Form } from "antd";
import { TAddress, isEvmAddress } from "@shared/lib/web3";
import { walletModel } from "@entities/wallet";

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

export const useTransactionParamsForm = (data: string, toAddress?: string) => {
  const publicClient = usePublicClient();
  const { address } = walletModel.useCurrentWallet();

  const [form] = Form.useForm<TTransactionParams>();

  const initialValues = {
    data,
    to: toAddress,
  };

  const updateNonce = useCallback(
    (address: TAddress) => {
      publicClient
        .getTransactionCount({ address })
        .then((value) => form.setFieldValue("nonce", value));
    },
    [form, publicClient]
  );

  // const updateGas

  const onValuesChange = useCallback(
    (changed: Partial<TTransactionParams>) => {
      if (changed.from && isEvmAddress(changed.from)) {
        updateNonce(changed.from);
        // updateGas
      }
    },
    [updateNonce]
  );

  useEffect(() => {
    if (address) {
      form.setFieldValue("from", address);
      onValuesChange({ from: address });
    }
  }, [address, form, onValuesChange, updateNonce]);

  return {
    form,
    onValuesChange,
    initialValues,
  };
};
