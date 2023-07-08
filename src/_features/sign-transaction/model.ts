import { useCallback, useMemo, useState } from "react";
import { TAbiFunction, TContract } from "@entities/contract";
import { encodeFunctionData } from "viem";
import { TTransactionParams } from "@shared/lib/tx";
import { usePublicClient } from "wagmi";
import { walletModel } from "@entities/wallet";
import { Form } from "antd";

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

export const useTransactionParamsForm = () => {
  const publicClient = usePublicClient();

  const [form] = Form.useForm<TTransactionParams>();

  const onValuesChange = useCallback(
    (changed: Partial<TTransactionParams>, values: TTransactionParams) => {
      console.log("values changed", changed, values);
      if (changed.from) {
        //todo add ETH address validation
        publicClient
          .getTransactionCount({ address: changed.from })
          .then((value) => form.setFieldValue("nonce", value));
      }
    },
    [form, publicClient]
  );

  return {
    form,
    onValuesChange,
  };
};
