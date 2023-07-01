import { Spin, Alert } from "antd";
import { useContractRead } from "wagmi";
import { TContract, TAbiFunction } from "../model";

type TProps = {
  contract: TContract;
  abi: TAbiFunction;
};

export const PropertyCall = ({ contract, abi }: TProps) => {
  const { data, error, isLoading } = useContractRead({
    address: contract.address,
    abi: contract.abi,
    functionName: abi.name,
  });

  if (isLoading) {
    return <Spin />;
  }

  if (error) {
    <Alert message={error.message} type="error" />;
  }

  return <>{String(data)}</>;
};
