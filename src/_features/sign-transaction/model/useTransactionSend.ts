import { TTransactionParams, stringToNative } from "@shared/lib/tx";
import { useCallback, useState } from "react";
import { useSendTransaction } from "wagmi";
import { sendTransaction } from "@wagmi/core";
import { useWatchTxNotification } from "./useTxNotification";
import { Chain, THexString } from "@shared/lib/web3";

const convertTx = (tx: TTransactionParams) => ({
  ...tx,
  gas: stringToNative(tx.gas),
  value: stringToNative(tx.value),
});

export const usePrepareTransactionSend = (tx?: TTransactionParams) => {
  const args = tx && convertTx(tx);
  const { data, isLoading, isSuccess, sendTransaction } =
    useSendTransaction(args);

  return {
    send: sendTransaction,
    hash: data?.hash,
    inProgress: isLoading,
    success: isSuccess,
  };
};

export const useTransactionSend = (chain: Chain) => {
  const [txHash, setTxHash] = useState("");

  const send = useCallback(async (tx: TTransactionParams) => {
    const { hash } = await sendTransaction(convertTx(tx));
    setTxHash(hash);
  }, []);

  useWatchTxNotification(chain, txHash as THexString);

  return {
    hash: txHash,
    send,
  };
};
