import { contractModel } from "@entities/contract";
import { Empty, Tabs } from "antd";
import { PropertiesList } from "./PropertiesList";
import { CallsList } from "./CallsList";
import { OperationsList } from "./OperationsList";

export const ContractBrowser = () => {
  const contract = contractModel.useCurrentContract();

  if (!contract) {
    return <Empty description="No smart contract selected" />;
  }

  const TabItems = [
    {
      key: "1",
      label: "Properties",
      children: <PropertiesList contract={contract} />,
    },
    {
      key: "2",
      label: "Calls",
      children: <CallsList contract={contract} />,
    },
    {
      key: "3",
      label: "Operations",
      children: <OperationsList contract={contract} />,
    },
    {
      key: "4",
      label: "Events",
      children: "Events",
    },
  ];

  return (
    <div>
      <Tabs items={TabItems} size="large" defaultActiveKey="1" />
    </div>
  );
};
