import { AbiFunction } from "abitype";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { TContract, contractModel } from "@entities/contract";
import { PropertyCall } from "@features/execute-contract";

type TProps = {
  contract: TContract;
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
