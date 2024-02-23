import { ParamValue, TAbiEvent, TEventLogs } from "@entities/contract";
import { Chain } from "@shared/lib/web3";
import { ExternalLink } from "@shared/ui/ExternalLink";
import { Table } from "antd";
import { chainModel } from "@entities/chain";

type TProps = {
  chain: Chain;
  event: TAbiEvent;
  items: TEventLogs;
  loading?: boolean;
};

const ROW_KEY = "__rowKey";

export const EventsTable = ({ chain, event, items, loading }: TProps) => {
  const { getTxUrl } = chainModel.useChainExplorer(chain);

  const columns = event.inputs.map((input, index) => ({
    title: input.name || `Param ${index}`,
    dataIndex: input.name || index,
    key: input.name || index,

    render: (value: unknown) => (
      <ParamValue abiType={input.type} value={value} />
    ),
  }));

  //let's add columns for system values: blockNumber or transaction hash, in future
  const systemColumns = [
    {
      title: "Block",
      dataIndex: "blockNumber",
      key: "blockNumber",
      render: (value: number) => <ParamValue abiType="uint" value={value} />,
    },
    {
      title: "TxHash",
      dataIndex: "transactionHash",
      key: "transactionHash",
      render: (txHash: string) => (
        <ExternalLink href={getTxUrl(txHash)}>{`${txHash.slice(
          0,
          10
        )}...`}</ExternalLink>
      ),
    },
  ];

  const dataSource = items.map((item) => {
    return {
      ...item.args,
      blockNumber: item.blockNumber,
      transactionHash: item.transactionHash,
      [ROW_KEY]: `${item.transactionHash}${item.logIndex}`,
    };
  });

  return (
    <Table
      dataSource={dataSource}
      rowKey={ROW_KEY}
      columns={[...columns, ...systemColumns]}
      size="small"
      scroll={{ x: true }}
      loading={loading}
    ></Table>
  );
};
