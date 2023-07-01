import { contractModel } from "@entities/contract";
import { Empty, Tabs } from "antd";
import { PropertiesView } from "./PropertiesView";

export const ContractBrowser = () => {
  const contract = contractModel.useCurrentContract();

  if (!contract) {
    return <Empty description="No smart-contract selected" />;
  }

  const TabItems = [
    {
      key: "1",
      label: "Properties",
      children: <PropertiesView contract={contract} />,
    },
    {
      key: "2",
      label: "Calls",
      children: "Calls",
    },
    {
      key: "3",
      label: "Operations",
      children: "Operations",
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
