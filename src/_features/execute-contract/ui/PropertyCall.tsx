import { Spin, Alert } from "antd";
import type { TContract, TAbiFunction } from "@entities/contract";
import { ParamValue } from "@entities/contract";
import { useContractCall } from "../model";

type TProps = {
  contract: TContract;
  abiItem: TAbiFunction;
};

export const PropertyCall = ({ contract, abiItem }: TProps) => {
  const { data, error, loading } = useContractCall(contract, abiItem, []);

  if (loading) {
    return <Spin />;
  }

  if (error) {
    <Alert message={error.message} type="error" />;
  }

  return <ParamValue value={data} abiType={abiItem.outputs[0]} />;
};
