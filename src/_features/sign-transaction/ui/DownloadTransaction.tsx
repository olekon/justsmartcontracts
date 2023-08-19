import { Button } from "antd";
import { useCallback } from "react";
import { download } from "@shared/lib/download";
import { TTransactionParams } from "@shared/lib/tx";

type TProps = {
  fetchTxFields: () => TTransactionParams;
};
export const DownloadTransaction = ({ fetchTxFields }: TProps) => {
  const handleClick = useCallback(() => {
    const tx = fetchTxFields();
    download(JSON.stringify(tx, null, "\t"), "tx.json");
  }, [fetchTxFields]);

  return (
    <Button type="text" onClick={handleClick}>
      Download
    </Button>
  );
};
