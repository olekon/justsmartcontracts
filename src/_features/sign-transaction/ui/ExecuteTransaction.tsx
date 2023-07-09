import { useEffect } from "react";
import { Button, Space } from "antd";
import { TTransactionParams } from "@shared/lib/tx";
import { download } from "@shared/lib/download";
import { useNotifications } from "@shared/lib/notify";
import { useTransactionSend } from "../model";

type TProps = {
  tx: TTransactionParams;
};

export const ExecuteTransaction = ({ tx }: TProps) => {
  const { send, hash, inProgress, success } = useTransactionSend(tx);
  const notify = useNotifications();

  const onSignClick = () => {
    send();
  };

  const onDownloadClick = () => {
    download(JSON.stringify(tx, null, "\t"), "tx.json");
  };

  useEffect(() => {
    if (hash) {
      notify(`Tx ${hash} in progress`);
    }
  }, [hash, notify]);

  useEffect(() => {
    if (success && hash) {
      notify(`Tx ${hash} confirmed`);
    }
  }, [hash, notify, success]);

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
