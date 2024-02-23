import { useCallback, useEffect } from "react";
import {
  useNotifications,
  Status as NotififcationStatus,
} from "@shared/lib/notify";
import { Chain, TChainId, THexString } from "@shared/lib/web3";
import { ExternalLink } from "@shared/ui/ExternalLink";
import { useWaitForTransaction } from "wagmi";
import { chainModel } from "@entities/chain";

type Status = "pending" | "confirmed" | "failed";

const NotificationStatus: Record<Status, NotififcationStatus> = {
  pending: "info",
  confirmed: "success",
  failed: "error",
};

export const useTxNotification = (chain: TChainId) => {
  const { getTxUrl } = chainModel.useChainExplorer(chain);
  const notify = useNotifications();

  return useCallback(
    (txHash: string, status: Status) => {
      const txShort = `${txHash.slice(0, 10)}...`;

      notify(
        <span>
          Transaction{" "}
          <ExternalLink href={getTxUrl(txHash)}>{txShort}</ExternalLink>{" "}
          {status}
        </span>,
        NotificationStatus[status]
      );
    },
    [getTxUrl, notify]
  );
};

export const useWatchTxNotification = (
  chain: Chain,
  hash: THexString | undefined
) => {
  const notify = useTxNotification(chain);

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

      notify(hash, status);
    }
  }, [chain, hash, isLoading, isSuccess, notify]);
};
