import { contractModel } from "@entities/contract";
import { Empty, Tabs } from "antd";
import { PropertiesList } from "./PropertiesList";
import { ReadonlyCallsList } from "./ReadonlyCallsList";
import { OperationsList } from "./OperationsList";
import { EventsList } from "./EventsList";
import { StaticCallsList } from "./StaticCallsList";

export const ContractBrowser = () => {
  const contract = contractModel.useCurrentContract();

  if (!contract) {
    return <Empty description="No smart contract selected" />;
  }

  const key = `${contract.address}${contract.chain}`;

  const TabItems = [
    {
      key: "1",
      label: "Properties",
      children: <PropertiesList contract={contract} key={key} />,
    },
    {
      key: "2",
      label: "Readonly calls",
      children: <ReadonlyCallsList contract={contract} key={key} />,
    },
    {
      key: "3",
      label: "Static calls",
      children: <StaticCallsList contract={contract} key={key} />,
    },
    {
      key: "4",
      label: "Operations",
      children: <OperationsList contract={contract} key={key} />,
    },
    {
      key: "5",
      label: "Events",
      children: <EventsList contract={contract} key={key} />,
    },
  ];

  return (
    <div>
      <Tabs items={TabItems} size="large" defaultActiveKey="1" />
    </div>
  );
};
