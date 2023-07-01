import { Tabs } from "antd";

import styles from "./ContractBrowser.module.scss";

const TabItems = [
  {
    key: "1",
    label: "Properties",
    children: "Properties",
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

export const ContractBrowser = () => {
  return (
    <div className={styles.root}>
      <Tabs items={TabItems} size="large" defaultActiveKey="1" />
    </div>
  );
};
