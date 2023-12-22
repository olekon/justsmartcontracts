import { Collapse } from "antd";
import { TContract, contractModel } from "@entities/contract";
import { GetterCall } from "@features/execute-contract";

type TProps = {
  contract: TContract;
};

export const StaticCallsList = ({ contract }: TProps) => {
  const functions = contractModel.useContractParamStaticCalls(contract);

  const items = functions.map((item, index) => ({
    label: item.name,
    key: index,
    children: <GetterCall contract={contract} abiItem={item} />,
  }));

  return <Collapse items={items} />;
};
