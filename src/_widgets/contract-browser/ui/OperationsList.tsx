import { Collapse } from "antd";
import { TContract, contractModel } from "@entities/contract";
import { OperationCall } from "@features/execute-contract";

type TProps = {
  contract: TContract;
};

export const OperationsList = ({ contract }: TProps) => {
  const functions = contractModel.useContractOperations(contract);

  const items = functions.map((item, index) => ({
    label: item.name,
    key: index,
    children: <OperationCall contract={contract} abiItem={item} />,
  }));

  return <Collapse items={items} />;
};
