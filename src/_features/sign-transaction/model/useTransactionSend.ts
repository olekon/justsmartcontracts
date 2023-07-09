import { TTransactionParams, stringToNative } from "@shared/lib/tx";
import { useSendTransaction } from "wagmi";

export const useTransactionSend = (tx: TTransactionParams) => {
  const args = {
    ...tx,
    gas: stringToNative(tx.gas),
    value: stringToNative(tx.value),
  };

  const { data, isLoading, isSuccess, sendTransaction } =
    useSendTransaction(args);

  return {
    send: sendTransaction,
    hash: data?.hash,
    inProgress: isLoading,
    success: isSuccess,
  };
};
