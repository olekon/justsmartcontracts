import { ParamValue, TAbiFunction, TContract } from "@entities/contract";
import { useContractCall } from "../model";
import { Alert, Spin } from "antd";

type TProps = {
  contract: TContract;
  abiItem: TAbiFunction;
  args: string[];
};
export const FetchCallResult = ({ contract, abiItem, args }: TProps) => {
  const { data, error, loading } = useContractCall(contract, abiItem, args);

  if (loading) {
    return <Spin />;
  }

  if (error) {
    <Alert message={error.message} type="error" />;
  }

  return <ParamValue value={data} abiType={abiItem.outputs[0].type} />;
};
