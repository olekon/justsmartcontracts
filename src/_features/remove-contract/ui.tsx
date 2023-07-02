import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { TContract } from "@entities/contract";
import { useRemoveContract } from "./model";
import { useCallback } from "react";

type TProps = {
  contract: TContract;
};

export const RemoveContractButton = ({ contract }: TProps) => {
  const remove = useRemoveContract(contract);

  const onConfirm = useCallback(
    (e?: React.MouseEvent<HTMLElement>) => {
      e?.stopPropagation();
      remove();
    },
    [remove]
  );

  return (
    <Popconfirm
      title={`Remove contract`}
      description={`Really delete contract - ${contract.name}?`}
      onConfirm={onConfirm}
      okText="Yes"
      cancelText="No"
    >
      <Button size="small" icon={<DeleteOutlined />} danger />
    </Popconfirm>
  );
};
