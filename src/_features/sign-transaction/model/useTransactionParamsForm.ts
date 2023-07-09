import { useCallback, useEffect, useMemo } from "react";
import { usePublicClient } from "wagmi";
import { Form } from "antd";
import { walletModel } from "@entities/wallet";
import { TAddress, isEvmAddress } from "@shared/lib/web3";
import { TTransactionParams } from "@shared/lib/tx";
import { encodeFunctionData } from "viem";
import { TAbiFunction, TContract } from "@entities/contract";

export const useTransactionParamsForm = (
  contract: TContract,
  abiItem: TAbiFunction,
  args: string[]
) => {
  const publicClient = usePublicClient();
  const { address } = walletModel.useCurrentWallet();

  const [form] = Form.useForm<TTransactionParams>();

  const initialValues = useMemo(
    () => ({
      data: encodeFunctionData({
        abi: contract.abi,
        args: args,
        functionName: abiItem.name,
      }),
      to: contract.address,
    }),
    [abiItem.name, args, contract.abi, contract.address]
  );

  const updateNonce = useCallback(
    (address: TAddress) => {
      publicClient
        .getTransactionCount({ address })
        .then((value) => form.setFieldValue("nonce", value));
    },
    [form, publicClient]
  );

  const updateGasLimit = useCallback(
    (address: TAddress) => {
      publicClient
        .estimateGas({
          account: address,
          to: initialValues.to,
          data: initialValues.data,
        })
        .then((value) => form.setFieldValue("gas", value.toString()))
        .catch(() => form.setFieldValue("gas", "0"));
    },
    [form, initialValues.data, initialValues.to, publicClient]
  );

  const onValuesChange = useCallback(
    (changed: Partial<TTransactionParams>) => {
      if (changed.from && isEvmAddress(changed.from)) {
        updateNonce(changed.from);
        updateGasLimit(changed.from);
      }
    },
    [updateGasLimit, updateNonce]
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
    payable: abiItem.stateMutability == "payable",
  };
};
