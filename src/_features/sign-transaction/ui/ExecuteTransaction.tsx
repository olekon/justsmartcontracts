import { useEffect } from "react";
import { TTransactionParams } from "@shared/lib/tx";
import { useTransactionSend } from "../model";
import { Button, Space, notification } from "antd";

type TProps = {
  tx: TTransactionParams;
};

export const ExecuteTransaction = ({ tx }: TProps) => {
  //TODO add download function
  const { send, hash, inProgress, success } = useTransactionSend(tx);
  const [notify, context] = notification.useNotification();

  const onSignClick = () => {
    send();
  };

  const onDownloadClick = () => {
    console.log("download", tx);

    const text = JSON.stringify(tx, null, "\t");
    var element = document.createElement("a");
    var file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "tx.txt";
    element.click();

    notify.info({
      message: `Downloaded`,
    });
  };

  useEffect(() => {
    if (hash) {
      notify.info({
        message: `Tx ${hash} in progress`,
      });
    }
  }, [hash, notify]);

  useEffect(() => {
    if (success && hash) {
      notify.info({
        message: `Tx ${hash} confirmed`,
      });
    }
  }, [hash, notify, success]);

  return (
    <>
      {context}
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
    </>
  );
};
