import { Collapse } from "antd";
import { TContract, contractModel } from "@entities/contract";
import { FetchEvents } from "@features/fetch-events";

type TProps = {
  contract: TContract;
};

export const EventsList = ({ contract }: TProps) => {
  const events = contractModel.useContractEvents(contract);

  const items = events.map((item, index) => ({
    label: item.name,
    key: index,
    children: <FetchEvents contract={contract} event={item} />,
  }));

  return <Collapse items={items} />;
};
