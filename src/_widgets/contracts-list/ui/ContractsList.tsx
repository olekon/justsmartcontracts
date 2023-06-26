import { Space } from "antd";
import { AddContract } from "@features/add-contract";

export const ContractsList = () => {
  return (
    <Space direction="vertical">
      <AddContract />
    </Space>
  );
};
