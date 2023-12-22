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
  let result = Array.isArray(data) ? data : [data];
  return (
    <>
      {result.map((item, index) => (
        <ParamValue
          value={item}
          abiType={abiItem.outputs[index].type}
          name={abiItem.outputs[index].name}
          key={index}
        />
      ))}
    </>
  );
};
