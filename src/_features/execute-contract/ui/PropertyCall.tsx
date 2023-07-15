import { Spin, Alert, Space, Button } from "antd";
import type { TContract, TAbiFunction } from "@entities/contract";
import { ParamValue } from "@entities/contract";
import { useContractCall } from "../model";
import { ReloadOutlined } from "@ant-design/icons";

type TProps = {
  contract: TContract;
  abiItem: TAbiFunction;
};

export const PropertyCall = ({ contract, abiItem }: TProps) => {
  const { data, error, loading, refetch } = useContractCall(
    contract,
    abiItem,
    []
  );

  if (loading) {
    return <Spin />;
  }

  if (error) {
    <Alert message={error.message} type="error" />;
  }

  return (
    <Space>
      <Button onClick={() => refetch()} icon={<ReloadOutlined />}></Button>
      <ParamValue value={data} abiType={abiItem.outputs[0]} />
    </Space>
  );
};
