import { useCallback, useEffect } from "react";
import {
  useNotifications,
  Status as NotififcationStatus,
} from "@shared/lib/notify";
import { Chain, THexString, getTxUrl } from "@shared/lib/web3";
import { ExternalLink } from "@shared/ui/ExternalLink";
import { useWaitForTransaction } from "wagmi";

type Status = "pending" | "confirmed" | "failed";

const NotificationStatus: Record<Status, NotififcationStatus> = {
  pending: "info",
  confirmed: "success",
  failed: "error",
};

export const useTxNotification = () => {
  const notify = useNotifications();

  return useCallback(
    (txHash: string, chain: Chain, status: Status) => {
      const txShort = `${txHash.slice(0, 10)}...`;

      notify(
        <span>
          Transaction{" "}
          <ExternalLink href={getTxUrl(chain, txHash)}>{txShort}</ExternalLink>{" "}
          {status}
        </span>,
        NotificationStatus[status]
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
