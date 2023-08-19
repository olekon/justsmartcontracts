import { AbiFunction } from "abitype";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { TContract, contractModel } from "@entities/contract";
import { PropertyCall } from "@features/execute-contract";

type TProps = {
  contract: TContract;
};

export const PropertiesList = ({ contract }: TProps) => {
  const functions = contractModel.useContractProperties(contract);

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
        <PropertyCall contract={contract} abiItem={abiItem} />
      ),
    },
  ];

  return (
    <Table
      rowKey="name"
      pagination={false}
      dataSource={functions}
      columns={columns}
    ></Table>
  );
};
