import { useCallback, useEffect } from "react";
import { usePublicClient } from "wagmi";
import { Form } from "antd";
import { walletModel } from "@entities/wallet";
import { TAddress, THexString, isEvmAddress } from "@shared/lib/web3";
import { TTransactionParams } from "@shared/lib/tx";

export const useTransactionParamsForm = (
  data: THexString,
  toAddress?: TAddress
) => {
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

  const updateGasLimit = useCallback(
    (address: TAddress) => {
      publicClient
        .estimateGas({
          account: address,
          to: toAddress,
          data: data as TAddress,
        })
        .then((value) => form.setFieldValue("gas", value.toString()))
        .catch(() => form.setFieldValue("gas", "0"));
    },
    [data, form, publicClient, toAddress]
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
  };
};
