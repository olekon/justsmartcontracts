import { usePrepareContractWrite } from "wagmi";
import { TAbiFunction, TContract } from "@entities/contract";
import { Spin } from "antd";

type TProps = {
  contract: TContract;
  abiItem: TAbiFunction;
  args: string[];
};
export const TxGenerator = ({ contract, abiItem, args }: TProps) => {
  const res = usePrepareContractWrite({
    address: contract.address,
    abi: contract.abi,
    //@ts-ignore somehow TS thinks functionName is of undefined type
    functionName: abiItem.name,
    args,
  });

  console.log(args);
  console.log(res);
  return res.isLoading ? <Spin /> : <>{res.data}</>;
};
