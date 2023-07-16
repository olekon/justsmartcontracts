import { useCallback, useEffect } from "react";
import { chainUtils } from "@entities/chain";
import { useNotifications } from "@shared/lib/notify";
import { Chain, THexString } from "@shared/lib/web3";
import { ExternalLink } from "@shared/ui/ExternalLink";
import { useWaitForTransaction } from "wagmi";

type Status = "pending" | "confirmed" | "failed";

export const useTxNotification = () => {
  const notify = useNotifications();

  return useCallback(
    (txHash: string, chain: Chain, status: Status) => {
      const txShort = `${txHash.slice(0, 10)}...`;

      notify(
        <span>
          Transaction{" "}
          <ExternalLink href={chainUtils.getTxUrl(chain, txHash)}>
            {txShort}
          </ExternalLink>{" "}
          {status}
        </span>,
        status === "failed"
      );
    },
    [notify]
  );
};

export const useWatchTxNotification = (
  chain: Chain,
  hash: THexString | undefined
) => {
  const notify = useTxNotification();

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash,
  });

  useEffect(() => {
    if (hash) {
      const status: Status = isLoading
        ? "pending"
        : isSuccess
        ? "confirmed"
        : "failed";

      notify(hash, chain, status);
    }
  }, [chain, hash, isLoading, isSuccess, notify]);
};
