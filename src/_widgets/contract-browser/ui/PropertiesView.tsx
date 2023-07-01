import { contractModel } from "@entities/contract";
import { PropertyCall } from "@entities/contract/";
import { AbiFunction } from "abitype";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

type TProps = {
  contract: contractModel.TContract;
};

export const PropertiesView = ({ contract }: TProps) => {
  const contractProperties = contractModel.useContractProperties(contract);

  const columns: ColumnsType<AbiFunction> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (_, abiItem) => abiItem.name,
      width: "20%",
    },
    {
      title: "Value",
      dataIndex: "abiItem",
      render: (_, abiItem) => (
        <PropertyCall contract={contract} abi={abiItem} />
      ),
      width: "20%",
    },
  ];

  return (
    <Table
      pagination={false}
      dataSource={contractProperties}
      columns={columns}
    ></Table>
  );
};
