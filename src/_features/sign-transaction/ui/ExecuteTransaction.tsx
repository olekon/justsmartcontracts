import { Button, Space } from "antd";
import { TTransactionParams } from "@shared/lib/tx";
import { download } from "@shared/lib/download";
import { Chain } from "@shared/lib/web3";
import { useTransactionSend } from "../model/useTransactionSend";
import { useWatchTxNotification } from "../model/useTxNotification";

type TProps = {
  tx: TTransactionParams;
  chain: Chain;
};

export const ExecuteTransaction = ({ tx, chain }: TProps) => {
  const { send, hash, inProgress, success } = useTransactionSend(tx);

  useWatchTxNotification(chain, hash);

  const onSignClick = () => {
    send();
  };

  const onDownloadClick = () => {
    download(JSON.stringify(tx, null, "\t"), "tx.json");
  };

  return (
    <Space>
      <Button
        type="primary"
        size="large"
        onClick={onSignClick}
        loading={inProgress}
      >
        Sign now
      </Button>
      <Button type="text" size="large" onClick={onDownloadClick}>
        Download
      </Button>
    </Space>
  );
};
